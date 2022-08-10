export const HOSTNAME_URL = "http://localhost:8080/api/v1";

export const BOOKS = {
  GET_BOOKS_BY_USER_ID: "/books",
  GET_TRADES_BY_BOOK_ID: "/books/trades",
};

export const TRADES = {
  GET_ALL_TRADES: "/trades",
  GET_TRADES_BY_ID: "/trades",
  UPDATE_TRADE: "/trades",
  ADD_TRADE: "/trades",
};

export const SECURITIES = {
  GET_ALL_SECURITIES: "/security",
  GET_SECURITY_BY_ID: "/security",
  ADD_SECURITY: "/security",
  UPDATE_SECURITY: "/security",
  DELETE_SECURITY: "/security",
};

export const USERS = {
  SIGNUP: "/auth/signup",
  SIGNIN: "/auth/signin",
};
