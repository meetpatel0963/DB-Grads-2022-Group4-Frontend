import { HOSTNAME_URL } from "../config/api";
import { TRADES } from "../config/api";
import axios from "axios";

export const getTradeById = (tradeId) => {
  return axios.get(`${HOSTNAME_URL}${TRADES.GET_TRADES_BY_ID}/${tradeId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjYwMDYyMTk5LCJleHAiOjE2NjA2NjY5OTl9.GWe_qwcudLsI7xnOeoEkOoJlSbkG-DJwgfM3E3lVoHfaIx_J3APUtf4E9QZXmLSU1BP-rsnQ1eVS2mY-hUs_xw",
    },
  });
};
