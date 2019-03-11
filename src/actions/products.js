import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

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

export const getAllProducts = products => dispatch => {
  return fetch(`${API_BASE_URL}/products/`, {
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

// // export const getOneProduct = product => dispatch => {
// //     return fetch(`${API_BASE_URL}/api/products/`, {
// //       method: "GET",
// //       headers: {
// // 'Accept': 'application/json',
// //         "content-type": "application/json"
// //       },
// //       body: JSON.stringify(product)
// //     })
// //       .then(res => normalizeResponseErrors(res))
// //       .then(res => res.json())
// //       .catch(err => {
// //         console.error(err);
// //         res.status(500).json({ error: "something went terribly wrong" });
// //       });
// //   };

// export const postProduct = product => dispatch => {
//   return fetch(`${API_BASE_URL}/api/products/`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(product)
//   })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .catch(err => {
//       console.error(err);
//     });
// };

// //success and error action
// //get all
// //store
// //

// // export const updateProduct = product => dispatch => {
// //   return fetch(`${API_BASE_URL}/api/products/`, {
// //     method: "PUT",
// //     headers: {
// //       "content-type": "application/json"
// //     },
// //     body: JSON.stringify(product)
// //   })
// //     .then(res => normalizeResponseErrors(res))
// //     .then(res => res.json())
// //     .catch(err => {
// //       console.error(err);
// //     });
// // };

// export const deleteProduct = product => dispatch => {
//   return fetch(`${API_BASE_URL}/api/products/`, {
//     method: "DELETE",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(product)
//   })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .catch(err => {
//       console.error(err);
//     });
// };