import { HOSTNAME_URL } from "../config/api";
import { SECURITIES } from "../config/api";
import axios from "axios";

export const getAllSecurities = () => {
  return axios.get(`${HOSTNAME_URL}${SECURITIES.GET_ALL_SECURITIES}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjYwMDYyMTk5LCJleHAiOjE2NjA2NjY5OTl9.GWe_qwcudLsI7xnOeoEkOoJlSbkG-DJwgfM3E3lVoHfaIx_J3APUtf4E9QZXmLSU1BP-rsnQ1eVS2mY-hUs_xw",
    },
  });
};

export const getSecurityById = (securityId) => {
  return axios.get(
    `${HOSTNAME_URL}${SECURITIES.GET_SECURITY_BY_ID}/${securityId}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjYwMDYyMTk5LCJleHAiOjE2NjA2NjY5OTl9.GWe_qwcudLsI7xnOeoEkOoJlSbkG-DJwgfM3E3lVoHfaIx_J3APUtf4E9QZXmLSU1BP-rsnQ1eVS2mY-hUs_xw",
      },
    }
  );
};
