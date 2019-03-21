import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const START_LOADING = "START_LOADING";
export const startLoading = () => ({
  type: START_LOADING
});

//Fetch GET api call
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products
});

export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";
export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  error
});

export const getAllProducts = filter => dispatch => {
  dispatch(startLoading()); // THIS WAS MISSING
  return fetch(`${API_BASE_URL}/products`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(products => dispatch(fetchProductsSuccess(products)))
    .catch(err => {
      console.log("Whoops! Try this again.");
      dispatch(fetchProductsError(err));
    });
};
//Fetch api call to get one product
export const FETCH_ONE_PRODUCT_SUCCESS = "FETCH_ONE_PRODUCT_SUCCESS";
export const fetchOneProductSuccess = product => ({
  type: FETCH_ONE_PRODUCT_SUCCESS,
  product
});

export const FETCH_ONE_PRODUCT_ERROR = "FETCH_ONE_PRODUCT_ERROR";
export const fetchOneProductError = error => ({
  type: FETCH_ONE_PRODUCT_ERROR,
  error
});

export const getOneProduct = productId => dispatch => {
  dispatch(startLoading()); // TODO Add to all gets
  return fetch(`${API_BASE_URL}/products/${productId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "content-type": "application/json"
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(product => dispatch(fetchOneProductSuccess(product)))
    .catch(err => {
      console.log("Whoops! Try this again.");
      dispatch(fetchOneProductError(err));
    });
};

//Fetch Post Api call
export const POST_ITEM_SUCCESS = "POST_ITEM_SUCCESS";
export const postItemSuccess = item => ({
  type: POST_ITEM_SUCCESS,
  item
});

export const POST_ITEM_ERROR = "POST_ITEM_ERROR";
export const postItemError = error => ({
  type: POST_ITEM_ERROR,
  error
});

export const postItem = item => dispatch => {
  return fetch(`${API_BASE_URL}/products/`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(item)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => dispatch(postItemSuccess(item)))
    .catch(err => {
      console.log("Whoops! Try this again.");
      dispatch(postItemError(err));
    });
};

export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const deleteItemSuccess = item => ({
  type: DELETE_ITEM_SUCCESS,
  item
});

export const DELETE_ITEM_ERROR = "DELETE_ITEM_ERROR";
export const deleteItemError = error => ({
  type: DELETE_ITEM_ERROR,
  error
});

export const deleteInventoryItem = itemId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/products/${itemId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => dispatch(deleteItemSuccess(item)))
    .then(dispatch(getAllProducts()))
    .catch(err => {
      console.log("Whoops! Try this again.");
      dispatch(deleteItemError(err));
    });
};
