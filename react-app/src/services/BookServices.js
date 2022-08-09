import { HOSTNAME_URL } from "../config/api";
import { BOOKS } from "../config/api";
import axios from "axios";

export const getBooksByUserId = (userId) => {
  return axios.get(`${HOSTNAME_URL}${BOOKS.GET_BOOKS_BY_USER_ID}/${userId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjYwMDYyMTk5LCJleHAiOjE2NjA2NjY5OTl9.GWe_qwcudLsI7xnOeoEkOoJlSbkG-DJwgfM3E3lVoHfaIx_J3APUtf4E9QZXmLSU1BP-rsnQ1eVS2mY-hUs_xw",
    },
  });
};

export const getTradesByBookId = (bookId) => {
  return axios.get(`${HOSTNAME_URL}${BOOKS.GET_TRADES_BY_BOOK_ID}/${bookId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjYwMDYyMTk5LCJleHAiOjE2NjA2NjY5OTl9.GWe_qwcudLsI7xnOeoEkOoJlSbkG-DJwgfM3E3lVoHfaIx_J3APUtf4E9QZXmLSU1BP-rsnQ1eVS2mY-hUs_xw",
    },
  });
};
