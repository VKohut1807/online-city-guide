import { MutationTree, ActionTree, ActionContext } from "vuex";
import { AxiosError } from "axios";
import authApi from "@/api/auth";
import { UserType } from "@/types/user-types";
import { setItem } from "@/helpers/persistanceStorage";

export enum AuthMutations {
  registerStart = "[auth] registerStart",
  registerSuccess = "[auth] registerSuccess",
  registerFailure = "[auth] registerFailure",
}

export enum AuthActions {
  register = "[auth] register",
}

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
  [AuthMutations.registerStart](state: State) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  [AuthMutations.registerSuccess](state: State, payload: UserType) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  [AuthMutations.registerFailure](state: State, payload: string[]) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },
};

const actions: ActionTree<State, any> = {
  [AuthActions.register](
    { commit, state }: ActionContext<State, any>,
    credentials: UserType
  ) {
    return new Promise((resolve, reject) => {
      commit(AuthMutations.registerStart);
      authApi
        .register(credentials)
        .then((response) => {
          commit(AuthMutations.registerSuccess, response.data.user);
          setItem("accessToken", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error: AxiosError<{ errors?: string[] }>) => {
          commit(AuthMutations.registerFailure, error?.response?.data?.errors);
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
