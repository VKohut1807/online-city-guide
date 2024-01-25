<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";

import { NavLinksType } from "@/types/links-types";

const props = defineProps({
  navDrawerToggle: {
    type: Boolean,
    required: true,
  },
});

const navigationDrawers: Ref<NavLinksType[]> = ref([
  {
    title: "Dashboard",
    icon: "HomeCircleOutline",
  },
  {
    title: "Images",
    icon: "ImageSearchOutline",
  },
  {
    title: "Files",
    icon: "FileDocumentOutline",
  },
  {
    title: "Games",
    icon: "GamepadVariantOutline",
  },
  {
    title: "Books",
    icon: "BookOpenVariantOutline",
  },
  {
    title: "Notifications",
    icon: "BellRingOutline",
  },
  {
    title: "Settings",
    icon: "CogOutline",
  },
  {
    title: "Profile",
    icon: "AccountCircleOutline",
  },
]);
onMounted(() => {});
</script>

<template>
  <nav class="nav">
    <ul :class="['nav_drawer', { active: props.navDrawerToggle }]">
      <li v-for="({ title, icon }, idx) in navigationDrawers" :key="idx">
        <a href="#">
          <mdicon :name="icon" />
          <span class="a__text">{{ title }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  position: relative;
  top: -1.5rem;
  margin-left: auto;

  .nav_drawer {
    position: absolute;
    top: 0;
    right: -10rem;
    width: fit-content;
    height: auto;
    list-style: none;
    margin-left: auto;
    background-color: $primary;
    display: flex;
    flex-direction: column;
    padding: 2rem 0rem 3rem;
    box-shadow: 0 10px 50px 0 rgba($primary_120, 0.25);
    border-radius: 5rem 0;
    transition: right 0.3s ease-in-out;

    &.active {
      right: 0;
    }

    li:nth-child(6) {
      &::before {
        content: "";
        display: block;
        margin: 2rem auto 0;
        padding-top: 1.25rem;
        border-top: 1px solid $secondary;
        width: 75%;
      }
    }
    li {
      a {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
        position: relative;
        &:hover,
        &:focus,
        &.active {
          background-color: $secondary;
          outline: 0;

          span {
            transform: scale(1);
            opacity: 1;
          }
        }

        .a__text {
          position: absolute;
          background-color: $secondary;
          white-space: nowrap;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          right: calc(100% + 0.5rem);
          transform-origin: center left;
          transform: scale(0);
          opacity: 0;
          transition: 0.3s ease-in-out;
          &:before {
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            position: absolute;
            background-color: $secondary;
            right: -5px;
            top: 50%;
            transform: translatey(-50%) rotate(45deg);
            border-radius: 3px;
          }
        }
      }
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
