import axios from "axios";
import {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (credentials) => async (dispatch) => {
  dispatch(registrationRequest());

  const resp = await axios.post("/users/signup", credentials);

  try {
    dispatch(registrationSuccess(resp.data));
    token.set(resp.data.token);
  } catch (error) {
    dispatch(registrationError(error.message));
  }
};

export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  const resp = await axios.post("/users/login", credentials);

  try {
    dispatch(loginSuccess(resp.data));
    token.set(resp.data.token);
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch(logoutRequest());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch((err) => dispatch(logoutError(err.message)));
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  axios
    .get("/users/current")
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch((err) => dispatch(getCurrentUserError(err.message)));
};
