<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";

import OcgNavBar from "@/components/NavBar.vue";
import OcgNavigationDrawers from "@/components/NavigationDrawers.vue";

const navDrawerToggle: Ref<boolean> = ref(false);

const updateNavDrawerToggle = (newValue: boolean) => {
  navDrawerToggle.value = newValue;
};

onMounted(() => {});
</script>

<template>
  <header class="main__header">
    <ocg-nav-bar
      :nav-drawer-toggle="navDrawerToggle"
      @update-nav-drawer-toggle="updateNavDrawerToggle"
    />
    <ocg-navigation-drawers :nav-drawer-toggle="navDrawerToggle" />
  </header>
</template>

<style scoped lang="scss">
.main__header {
  width: 100%;
  position: fixed;
  top: 0;
  overflow-x: clip;
}
</style>
