import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from "../actions/products";

const initialState = {
  products: [],
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return Object.assign({}, state, {
      products: action.products,
      error: null
    });
  } else if (action.type === FETCH_PRODUCTS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
