<script setup lang="ts">
import {
  onMounted,
  computed,
  ComputedRef,
  reactive,
  WritableComputedRef,
} from "vue";
import ArrowRight from "@/images/svg/arrow-right.vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { AuthActions } from "@/store/modules/auth";
import { UserType } from "@/types/user-types";
import { AuthTypes } from "@/types/auth-types";

const store = useStore();
const router = useRouter();

const isSubmitting: ComputedRef<AuthTypes["isSubmitting"]> = computed(
  () => store.state.auth.isSubmitting
);
const validationErrors: ComputedRef<AuthTypes["validationErrors"]> = computed(
  () => store.state.auth.validationErrors
);

const usernameOrEmail: WritableComputedRef<string | null> = computed({
  get(): string | null {
    return user.username || user.email;
  },
  set(value: string | null) {
    user.username = !value?.includes("@") ? value : null;
    user.email = value?.includes("@") ? value : null;
  },
});

const user: UserType = reactive({
  username: null,
  email: null,
  password: null,
});

const onsubmit = (): void => {
  store
    .dispatch(AuthActions.login, user as UserType)
    .then((user: UserType) => {
      router.push({ name: "home" });
    })
    .catch((error: Error) => {
      console.error("Error during login:", error);
    });
};

onMounted(() => {});
</script>

<template>
  <section class="wrap_50">
    <div class="login">
      <div class="login__left">
        <sup
          style="color: red"
          v-for="(valueError, nameError) in validationErrors"
          :key="nameError"
          >{{ nameError }}. -
          <span v-for="(error, idxErr) in valueError" :key="idxErr">{{
            error
          }}</span>
        </sup>
        <h2>Login</h2>
        <form @submit.prevent="onsubmit" class="left__form">
          <div>
            <input
              v-model="usernameOrEmail"
              type="text"
              placeholder="User Name Or Email"
            />
          </div>
          <div>
            <input v-model="user.password" type="text" placeholder="Pass" />
          </div>
          <div class="form__policy">
            <input type="checkbox" name="reg_policy" id="reg_policy" />
            <label for="reg_policy">I accept all terms & condition</label>
          </div>
          <button :disabled="isSubmitting">Sign In</button>
        </form>
      </div>
      <div class="login__right">
        <div class="right__info">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            officiis.
          </p>
          <router-link :to="{ name: 'register' }" class="right__link">
            <span class="link__text">Need an account?</span>
            <ArrowRight svg-class="link__svg" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.login {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  .login__left {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .left__form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: none;
      }

      .form__policy {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }

      button {
        width: fit-content;
        padding: 0.5rem 1rem;
        background-color: $primary;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        color: #fff;

        &:disabled {
          background-color: $primary_40;
        }
      }
    }
  }
  .login__right {
    width: 60%;
    margin: auto 0;

    .right__info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h2 {
      }
      p {
      }
      .right__link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        color: $primary;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: $secondary;
        }

        svg {
          display: block;
          width: 1.5rem;
          height: auto;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.right__link {
  &:hover {
    .link__svg {
      transform: translateX(5px);

      path {
        fill: $secondary;
      }
    }
  }

  .link__svg {
    display: block;
    width: 1.5rem;
    height: auto;
    transition: transform 0.3s ease-in-out;

    path {
      fill: $primary;
      transition: fill 0.3s ease-in-out;
    }
  }
}
</style>
