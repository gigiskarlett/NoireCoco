import { API_BASE_URL } from "../config";

export const getAllProducts = products => dispatch => {
  return fetch(`${API_BASE_URL}/api/products/`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(products)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "something went terribly wrong" });
    });
};

export const postProduct = product => dispatch => {
    return fetch(`${API_BASE_URL}/api/products/`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: "something went terribly wrong" });
      });
  };

  
  export const deleteProduct = product => dispatch => {
      return fetch(`${API_BASE_URL}/api/products/`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(product)
      })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: "something went terribly wrong" });
        });
    };