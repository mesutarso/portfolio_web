<template>
  <div class="footer__contact">
    <div class="footer__title text-left">
      <h4 class="title">
        <span class="title__text">
          {{ title }}
        </span>
      </h4>
    </div>
    <b-row class="footer__contact-row flex-column mt-4">
      <b-col
        v-for="link in links"
        :key="link.title"
        class="footer__contact-col d-flex align-items-center"
      >
        <b-link :href="link.link" class="d-flex write-color mb-3">
          <Icon :icon="link.icon" class="text-light iconSize" />
          <h5 class="text-light mx-2 footer__contact pt-2">
            {{ link.title }}
          </h5>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "FooterContact",
  components: {
    Icon,
  },

  data() {
    return {
      title: "Mes Coordonnées",
      links: [
        {
          title: "Adresse",
          link: "/+243852214059",
          icon: "mdi:map-marker-radius",
        },
        {
          title: "Téléphone",
          link: "tel:",
          icon: "ci:phone",
        },
        {
          title: "Email",
          link: "mailto:mechacktambwe@gmail.com",
          icon: "carbon:email",
        },
        {
          title: "Whatsapp",
          link: "https://wa.me/+243852214059",
          icon: "akar-icons:whatsapp-fill",
        },
      ],
    };
  },
};
</script>
