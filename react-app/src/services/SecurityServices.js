import { HOSTNAME_URL } from "../config/api";
import { SECURITIES } from "../config/api";
import axios from "axios";

export const getAllSecurities = () => {
  const accessToken = localStorage.getItem("access-token");
  return axios.get(`${HOSTNAME_URL}${SECURITIES.GET_ALL_SECURITIES}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getSecurityById = (securityId) => {
  const accessToken = localStorage.getItem("access-token");
  return axios.get(
    `${HOSTNAME_URL}${SECURITIES.GET_SECURITY_BY_ID}/${securityId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const deleteSecurity = (securityId) => {
  const accessToken = localStorage.getItem("access-token");
  return axios.delete(
    `${HOSTNAME_URL}${SECURITIES.DELETE_SECURITY}/${securityId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const updateSecurity = (security) => {
  const accessToken = localStorage.getItem("access-token");
  return axios.put(
    `${HOSTNAME_URL}${SECURITIES.UPDATE_SECURITY}/${security.id}`,
    security,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const addSecurity = (security) => {
  const accessToken = localStorage.getItem("access-token");
  return axios.post(`${HOSTNAME_URL}${SECURITIES.ADD_SECURITY}`, security, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
