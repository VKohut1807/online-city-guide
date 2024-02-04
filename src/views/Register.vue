<script setup lang="ts">
import {onMounted, computed, ComputedRef, reactive} from "vue";
import ArrowRight from "@/images/svg/arrow-right.vue";

import {useStore} from "vuex";
import {useRouter} from "vue-router";

import {AuthActions} from "@/store/modules/auth";
import {UserType} from "@/types/user-types";
import {AuthTypes} from "@/types/auth-types";

const store = useStore();
const router = useRouter();

const isSubmitting: ComputedRef<AuthTypes["isSubmitting"]> = computed(
  () => store.state.auth.isSubmitting
);
const validationErrors: ComputedRef<AuthTypes["validationErrors"]> = computed(
  () => store.state.auth.validationErrors
);

const user: UserType = reactive({
  username: null,
  email: null,
  password: null,
});

const onsubmit = (): void => {
  store
    .dispatch(AuthActions.register, user as UserType)
    .then((user: UserType) => {
      router.push({name: "home"});
    })
    .catch((errors: Error) => {
      console.error("Error during registration:", errors);
    });
};

onMounted(() => {});
</script>

<template>
  <section class="wrap_50">
    <div class="register">
      <div class="register__left">
        <div class="left__info">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            officiis.
          </p>
          <router-link :to="{name: 'login'}" class="left__link">
            <span class="link__text">Have an account?</span>
            <ArrowRight svg-class="link__svg" />
          </router-link>
        </div>
      </div>
      <div class="register__right">
        <sup
          style="color: red"
          v-for="(valueError, nameError) in validationErrors"
          :key="nameError"
          >{{ nameError }}. -
          <span v-for="(error, idxErr) in valueError" :key="idxErr">{{
            error
          }}</span>
        </sup>
        <h2>Registration</h2>
        <form @submit.prevent="onsubmit" class="right__form">
          <div>
            <input
              v-model="user.username"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div>
            <input v-model="user.email" type="text" placeholder="Email" />
          </div>
          <div>
            <input v-model="user.password" type="text" placeholder="Pass" />
          </div>
          <div class="form__policy">
            <input type="checkbox" name="reg_policy" id="reg_policy" />
            <label for="reg_policy">I accept all terms & condition</label>
          </div>
          <button :disabled="isSubmitting">Sign Up</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.register {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .register__left {
    width: 60%;
    margin: auto 0;

    .left__info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h2 {
      }
      p {
      }
      .left__link {
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

  .register__right {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .right__form {
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
}
</style>

<style lang="scss">
.left__link {
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
