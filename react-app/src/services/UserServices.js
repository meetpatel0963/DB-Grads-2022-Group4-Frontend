import { HOSTNAME_URL } from "../config/api";
import { USERS } from "../config/api";
import axios from "axios";

export const signup = (
  firstName,
  lastName,
  username,
  email,
  password,
  roles
) => {
  return axios.post(`${HOSTNAME_URL}${USERS.SIGNUP}`, {
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
    roles: roles,
  });
};

export const signin = (username, password) => {
  return axios.post(`${HOSTNAME_URL}${USERS.SIGNIN}`, {
    username: username,
    password: password,
  });
};
