<template>
  <main-header />
  <main>
    <router-view />
  </main>
  <main-footer />
</template>

<script setup lang="ts">
import MainHeader from "@/components/blocks/Header.vue";
import MainFooter from "@/components/blocks/Footer.vue";
</script>

<style lang="scss">
#app {
  background-color: $secondary_10;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(180deg, #00c6fb, #005bea);
  }

  main {
    flex-grow: 1;
    height: 100%;
    margin-top: 11rem;
  }
}
</style>
