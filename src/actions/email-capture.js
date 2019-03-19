import { normalizeResponseErrors } from "./utils";
import { API_BASE_URL } from "../config";

//Fetch Post Api call action
export const POST_SUBSCRIBE_SUCCESS = "POST_SUBSCRIBE_SUCCESS";
export const postSubscribeSuccess = email => ({
  type: POST_SUBSCRIBE_SUCCESS,
  email
});

export const POST_SUBSCRIBE_ERROR = "POST_SUBSCRIBE_ERROR";
export const postSubscribeError = error => ({
  type: POST_SUBSCRIBE_ERROR,
  error
});

export const postEmail = email => dispatch => {
  return fetch(`${API_BASE_URL}/subscribe/`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(email)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(email => dispatch(postSubscribeSuccess(email)))
    .catch(err => {
      console.log("Whoops! Try this again.");
      dispatch(postSubscribeError(err));
    });
};