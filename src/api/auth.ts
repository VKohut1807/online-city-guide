import axios from "@/api/index";
import {UserType} from "@/types/user-types";

const register = (credentials: UserType) => {
  return axios.post("/auth/register", {user: credentials});
};

const login = (credentials: UserType) => {
  return axios.post("/auth/login", {user: credentials});
};

export default {
  register,
  login,
};
