<script setup lang="ts">
import { onMounted } from "vue";

import ArrowRight from "@/images/svg/arrow-right.vue";

const props = defineProps({
  cardData: {
    type: Object,
    required: true,
  },
  cardClass: {
    type: String,
    required: false,
  },
});

onMounted(() => {});
</script>

<template>
  <div :class="['card', cardClass]">
    <div class="card__img">
      <img :src="cardData.img.src" alt="cardData.img.alt" />
    </div>
    <div class="card__context">
      <div class="context__category">
        <div class="category__counter">
          {{ cardData.index < 10 ? "0" + cardData.index : cardData.index }}
        </div>
        <div class="category__line"></div>
        <h5 class="category__name h5__normal">{{ cardData.category }}</h5>
      </div>
      <h2 class="context__name">{{ cardData.name }}</h2>
      <p class="context__description">{{ cardData.description }}</p>
      <router-link :to="{ name: 'home' }" class="context__link">
        <span class="link__text">read more</span>
        <ArrowRight svg-class="link__svg" />
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: row;

  &.revert {
    .card__img {
      img {
        margin: 0 0 0 auto;
      }
    }

    .card__context {
      order: -1;
    }
  }

  .card__img {
    flex: 1;

    img {
      width: 22rem;
      margin: 0 auto 0 0;
      border-radius: 25%;
    }
  }

  .card__context {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .context__category {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      position: relative;
      z-index: 1;
      .category__counter {
        user-select: none;
        position: absolute;
        font-size: 17rem;
        top: 50%;
        left: 0%;
        color: $third_110;
        z-index: -1;
        opacity: 0.2;
        transform: translate(-50%, -50%);
      }

      .category__line {
        width: 72px;
        height: 2px;
        background-color: $secondary;
      }

      .category__name {
        color: $secondary;
        text-transform: uppercase;
        line-height: 24px;
        font-weight: 800;
        letter-spacing: 6px;
      }
    }

    .context__name {
      margin-bottom: 24px;
      font-family: "Serif Display", sans-serif;
      line-height: 110%;
      font-weight: 600;
    }

    .context__description {
      font-family: "Sans Serif", Arial, sans-serif;
      color: $third_100;
      line-height: 32px;
      font-weight: 500;
    }

    .context__link {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      color: $primary;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: $secondary;
      }

      .link__text {
        line-height: 4rem;
        font-weight: 500;
      }
    }
  }
}
</style>

<style lang="scss">
.context__link {
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
