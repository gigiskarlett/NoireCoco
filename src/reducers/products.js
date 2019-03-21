import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_ONE_PRODUCT_ERROR,
  POST_ITEM_SUCCESS,
  POST_ITEM_ERROR,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
  START_LOADING
} from "../actions/products";

const initialState = {
  products: [],
  selectedProduct: {
    imageUrl: "",
    shortDescription: "",
    secondImage: "",
    thirdImage: "",
    details: ""
  },
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  if (action.type === START_LOADING) {
    console.log("SHIT'S LOADING YA");
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return Object.assign({}, state, {
      products: action.products,
      error: null,
      loading: false
    });
  } else if (action.type === FETCH_PRODUCTS_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === FETCH_ONE_PRODUCT_SUCCESS) {
    return Object.assign({}, state, {
      selectedProduct: action.product,
      error: null,
      loading: false
    });
  } else if (action.type === FETCH_ONE_PRODUCT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === POST_ITEM_SUCCESS) {
    return Object.assign({}, state, {
      item: action.item,
      error: null,
      loading: false
    });
  } else if (action.type === POST_ITEM_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === DELETE_ITEM_SUCCESS) {
    return Object.assign({}, state, {
      item: action.item,
      error: null
    });
  } else if (action.type === DELETE_ITEM_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
