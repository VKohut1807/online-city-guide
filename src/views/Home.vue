<script setup lang="ts">
import { ref, Ref } from "vue";
import OcgCard from "@/components/Card.vue";

type Card = {
  index: number;
  category: string;
  name: string;
  description: string;
  route: string;
  img: {
    src: string;
    alt: string;
  };
};

const cardData: Ref<Card[]> = ref([
  {
    index: 1,
    category: "Dashboard",
    name: "Dashboard",
    description:
      "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
    route: "home",
    img: {
      src: "src/images/02.png",
      alt: "",
    },
  },
  {
    index: 2,
    category: "Dashboard",
    name: "Dashboard",
    description:
      "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
    route: "home",
    img: {
      src: "src/images/02.png",
      alt: "",
    },
  },
]);
</script>

<template>
  <ul
    class="wrap_85"
    style="display: flex; flex-direction: column; height: auto; gap: 7rem"
  >
    <li v-for="(cardEl, index) in cardData" :key="cardEl.index">
      <ocg-card :card-data="cardEl" :card-class="index % 2 ? 'revert' : null" />
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
