import { MutationTree, ActionTree, ActionContext } from "vuex";
import { AxiosError } from "axios";
import authApi from "@/api/auth";
import { UserType } from "@/types/user-types";
import { setItem } from "@/helpers/persistanceStorage";

type State = {
  isSubmitting: boolean;
  currentUser: object | null;
  validationErrors: string[] | null;
  isLoggedIn: boolean | null;
};

const state: State = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
};

const mutations: MutationTree<State> = {
  registerStart(state: State) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  registerSuccess(state: State, payload: UserType) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  registerFailure(state: State, payload: string[]) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },
};

const actions: ActionTree<State, any> = {
  register(
    { commit, state }: ActionContext<State, any>,
    credentials: UserType
  ) {
    return new Promise((resolve, reject) => {
      commit("registerStart");
      authApi
        .register(credentials)
        .then((response) => {
          commit("registerSuccess", response.data.user);
          setItem("accessToken", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error: AxiosError<{ errors?: string[] }>) => {
          commit("registerFailure", error?.response?.data?.errors);
          console.log("ERRORS", error?.response?.data?.errors);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
