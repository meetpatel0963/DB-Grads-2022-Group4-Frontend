import { HOSTNAME_URL } from "../config/api";
import { TRADES } from "../config/api";
import axios from "axios";

export const getAllTrades = () => {
  const accessToken = localStorage.getItem("access-token");
  return axios.get(`${HOSTNAME_URL}${TRADES.GET_ALL_TRADES}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getTradeById = (tradeId) => {
  const accessToken = localStorage.getItem("access-token");
  return axios.get(`${HOSTNAME_URL}${TRADES.GET_TRADES_BY_ID}/${tradeId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const updateTrade = (trade) => {
  const accessToken = localStorage.getItem("access-token");
  return axios.put(`${HOSTNAME_URL}${TRADES.UPDATE_TRADE}/${trade.id}`, trade, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const addTrade = (trade) => {
  const accessToken = localStorage.getItem("access-token");
  return axios.post(`${HOSTNAME_URL}${TRADES.ADD_TRADE}`, trade, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
