<template>
  <footer class="footer">
    <b-row class="flex-wrap align-items-start">
      <b-col lg="4" md="6" sm="12">
        <div class="footer__logo">
          <Logo class="white-color" />
        </div>
        <div class="footer__description mt-4">
          <Description
            :content="description.content"
            :class="description.class"
          />
        </div>
        <b-row
          class="footer__social-links flex-nowrap justify-content-between my-4"
        >
          <b-col v-for="socialIcon in socialIcons" :key="socialIcon.icon">
            <Icon :link="socialIcon.link" :icon="socialIcon.icon" />
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="4" md="6" sm="12" class="px-5">
        <FooterNavBar />
      </b-col>
      <b-col lg="4" md="6" sm="12" class="px-5">
        <FooterContact />
      </b-col>
    </b-row>
  </footer>
</template>
<script>
import Description from "../Shared/Description.vue";
import Logo from "../Shared/Logo.vue";
import Icon from "./Icon.vue";
import FooterNavBar from "./FooterNavBar.vue";
import FooterContact from "./FooterContact.vue";
export default {
  name: "Footer",
  components: {
    Logo,
    Description,
    Icon,
    FooterNavBar,
    FooterContact,
  },
  data() {
    return {
      description: {
        content:
          "j'aime résoudre les problèmes avec des solutions propres et évolutives. j'ai une véritable passion pour le design et le code. C'est une question de survie.",
        class: "white-color mt-4",
      },
      socialIcons: [
        {
          link: "https://facebook.com",
          icon: "ci:facebook",
        },
        {
          link: "https://twitter.com",
          icon: "ci:twitter",
        },
        {
          link: "https://instagram.com",
          icon: "ci:instagram",
        },
        {
          link: "https://github.com",
          icon: "ci:github",
        },
        {
          link: "https://linkedin.com",
          icon: "ci:linkedin",
        },
        {
          link: "https://stackoverflow.com",
          icon: "ci:stack-overflow",
        },
      ],
    };
  },
};
</script>
