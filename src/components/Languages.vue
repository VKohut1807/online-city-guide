<script lang="ts" setup>
import { getItem, setItem } from "@/helpers/persistanceStorage";

import {
  ref,
  Ref,
  computed,
  ComputedRef,
  onMounted,
  defineProps,
  reactive,
} from "vue";

type LanguagesType = {
  name: string;
  short: string;
  icon?: string;
};

const languages: LanguagesType[] = [
  {
    name: "English",
    short: "en",
  },
  {
    name: "Українська",
    short: "ua",
  },
  {
    name: "Polska",
    short: "pl",
  },
  {
    name: "Русский",
    short: "ru",
  },
];
const selectedLanguage: Ref<LanguagesType> = ref({
  name: "Українська",
  short: "ua",
});

const selectLanguage = (value: LanguagesType): void => {
  selectedLanguage.value = value;

  setItem("_lang", value?.short);
};
</script>

<template>
  <v-menu transition="slide-x-transition">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" stacked>
        <v-badge :content="selectedLanguage.short" color="error">
          <v-icon>mdi-web</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in languages" :key="i">
        <v-list-item-title @click="selectLanguage(item)">{{
          item.name
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped lang="scss"></style>
