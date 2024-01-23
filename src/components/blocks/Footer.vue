<script lang="ts" setup>
import { ref, Ref } from "vue";
import { LinksType, SocialLinksType } from "@/types/links-types";

const socialLinks: Ref<SocialLinksType[]> = ref([
  {
    route: "home",
    title: "Facebook",
    icon: "Facebook",
  },
  {
    route: "home",
    title: "Instagram",
    icon: "Instagram",
  },
  {
    route: "home",
    title: "Twitter",
    icon: "Twitter",
  },
  {
    route: "home",
    title: "Linkedin",
    icon: "Linkedin",
  },
]);

const pageLinks: Ref<LinksType[]> = ref([
  {
    title: "Home",
    route: "home",
  },
  {
    title: "About Us",
    route: "home",
  },
  {
    title: "Team",
    route: "home",
  },
  {
    title: "Services",
    route: "home",
  },
  {
    title: "Blog",
    route: "home",
  },
  {
    title: "Contact Us",
    route: "home",
  },
]);
</script>

<template>
  <footer class="footer">
    <div class="footer__sections wrap_85">
      <div class="sections__left">
        <div class="left__header">
          <router-link :to="{ name: 'home' }" class="header__logo">
            <img src="@/assets/logo_transformed.png" />
          </router-link>
          <h4>bla bla bla bla bla bla bla bla</h4>
        </div>
        <div class="left__footer">
          <h4>Copyright 2024, VKohut1807</h4>
          <h4>A concept by Vasyl Kohut</h4>
        </div>
      </div>
      <div class="sections__right">
        <ul class="right__pages">
          <li><h2>Pages</h2></li>
          <li v-for="({ route, title }, idx) in pageLinks" :key="idx">
            <router-link :to="{ name: route }">{{ title }}</router-link>
          </li>
        </ul>
        <ul class="right__social">
          <li><h2>Socials</h2></li>
          <li v-for="({ route, title, icon }, idx) in socialLinks" :key="idx">
            <router-link :to="{ name: route }"
              ><mdicon :name="icon" />{{ title }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: fit-content;
  margin-top: auto;
  flex-shrink: 0;
  background-color: $primary;
  border-radius: 50% 50% 0 0;

  .footer__sections {
    display: flex;
    flex-direction: row;
    padding: 5.5rem 1rem 1.5rem;
    gap: 3rem;

    .sections__left {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      flex: 1;

      .left__header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        .header__logo {
          display: block;
          width: 5rem;
        }

        h4 {
          color: #fff;
          transition: color 0.3s ease-in-out;
        }
      }
      .left__footer {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: $secondary_50;
      }
    }

    .sections__right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 3rem;
      flex: 1;

      .right__social,
      .right__pages {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li:first-child {
          h2 {
            color: $secondary_40;
          }
          &:hover {
            transform: scale(1);
          }
        }

        li {
          transition: transform 0.3s ease-in-out;

          a {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
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
    }
  }
}
</style>
