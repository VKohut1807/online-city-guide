<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import { LinksType } from "@/types/links-types";

const props = defineProps({
  navDrawerToggle: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "updateNavDrawerToggle", value: boolean): void;
}>();

const navLinks: Ref<LinksType[]> = ref([
  {
    route: "home",
    title: "Page 1",
  },
  {
    route: "home",
    title: "Page 2",
  },
  {
    route: "home",
    title: "Page 3",
  },
]);

const clickNavDrawerToggle = (): void => {
  emit("updateNavDrawerToggle", !props.navDrawerToggle);
};

onMounted(() => {});
</script>

<template>
  <nav class="nav wrap">
    <div class="nav__header wrap_85">
      <router-link :to="{ name: 'home' }" class="header__logo">
        <img src="@/assets/logo_transformed.png" />
      </router-link>
      <ul class="header__links">
        <li v-for="({ route, title }, idx) in navLinks" :key="idx">
          <router-link :to="{ name: route }">{{ title }}</router-link>
        </li>
      </ul>
      <div class="header__right_gr">
        <router-link :to="{ name: 'register' }" class="right_gr__register">
          <mdicon name="AccountCircleOutline" />
          Register
        </router-link>
        <a
          @click="clickNavDrawerToggle"
          :class="['right_gr__account_data', { active: props.navDrawerToggle }]"
        >
          <mdicon name="AccountCircleOutline" />
          Account
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  background-color: $primary;
  border-radius: 0 0 50% 50%;

  .nav__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem 1.5rem;

    .header__logo {
      display: block;
      width: 2.5rem;
      border-radius: 50%;
      background-color: #fff;
      transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

      &:hover {
        background-color: $secondary;
        transform: scale(1.25);
      }
    }

    .header__links {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;

      li {
        transition: transform 0.3s ease-in-out;

        a {
          color: #fff;
          transition: color 0.3s ease-in-out;
        }
        &:hover {
          transform: scale(1.25);

          a {
            color: $secondary;
          }
        }
      }
    }

    .header__right_gr {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      .right_gr__register {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        color: #fff;

        &:hover,
        &:focus {
          color: $secondary;
        }

        &.active {
          color: $secondary;
          transform: scale(1.25);
        }
      }
      .right_gr__account_data {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        color: #fff;

        &:hover,
        &:focus {
          color: $secondary;
        }

        &.active {
          color: $secondary;
          transform: scale(1.25);
        }
      }
    }
  }
}
</style>
