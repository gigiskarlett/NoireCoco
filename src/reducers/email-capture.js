import {
  POST_SUBSCRIBE_SUCCESS,
  POST_SUBSCRIBE_ERROR
} from "../actions/email-capture";

const initialState = {
  email: "",
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === POST_SUBSCRIBE_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === POST_SUBSCRIBE_SUCCESS) {
    return Object.assign({}, state, {
      email: action.email,
      error: null
    });
  }
  return state;
}
