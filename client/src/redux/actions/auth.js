import { authTypes } from "../types/authTypes";

export const login = (data) => ({
  type: authTypes.login,
  payload: data,
});

export const logout = () => ({
  type: authTypes.logout,
});
