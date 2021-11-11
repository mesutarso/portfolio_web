<template>
  <div class="footer__navbar">
    <div class="footer__title text-left">
      <h4 class="title">
        <span class="title__text">
          {{ title }}
        </span>
      </h4>
    </div>
    <b-row
      class="
        footer__links
        flex-column
        justify-content-start
        align-items-start
        mt-4
      "
    >
      <b-col v-for="link in links" :key="link.title">
        <NavItem :link="link.link" :title="link.title" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import NavItem from "./NavItem.vue";
export default {
  name: "FooterNavBar",
  components: {
    NavItem,
  },

  data() {
    return {
      title: "Liens Rapides",
      links: [
        {
          title: "Accueil",
          link: "/",
        },
        {
          title: "A propos",
          link: "#about",
        },
        {
          title: "Contact",
          link: "#contact",
        },
        {
          title: "Mentions légales",
          link: "/legal",
        },
        {
          title: "Politique de Confidentialités",
          link: "/policy",
        },
      ],
    };
  },
};
</script>
