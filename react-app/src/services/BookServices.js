import { HOSTNAME_URL } from "../config/api";
import { BOOKS } from "../config/api";
import axios from "axios";

export const getBooksByUserId = (userId) => {
  const accessToken = localStorage.getItem("access-token");
  return axios.get(`${HOSTNAME_URL}${BOOKS.GET_BOOKS_BY_USER_ID}/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getTradesByBookId = (bookId) => {
  const accessToken = localStorage.getItem("access-token");
  return axios.get(`${HOSTNAME_URL}${BOOKS.GET_TRADES_BY_BOOK_ID}/${bookId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
