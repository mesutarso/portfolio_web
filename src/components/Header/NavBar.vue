<template>
  <b-navbar
    toggleable="md"
    fixed="top"
    type="light"
    class="header d-flex justify-content-around align-items-center"
  >
    <Logo class="header__logo" />

    <b-navbar-toggle
      target="navbar-toggle-collapse"
      class="primary-color header__toggle"
    >
      <template #default="{ expanded }">
        <Icon v-if="expanded" icon="eva:close-fill" />
        <Icon v-else icon="dashicons:menu-alt" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav
        class="header__nav"
        v-for="item in menuItems"
        :key="item.name"
      >
        <NavItem :title="item.name" :link="item.url" />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import Logo from "../Shared/Logo.vue";
import NavItem from "./NavItem.vue";
import { Icon } from "@iconify/vue2";
export default {
  name: "NavBar",
  components: {
    Logo,
    NavItem,
    Icon,
  },
  data() {
    return {
      menuItems: [
        {
          name: "Accueil",
          url: "#hero",
        },
        {
          name: "A propos",
          url: "#a-propos",
        },
        {
          name: "Compétences",
          url: "#competences",
        },
        {
          name: "Projects",
          url: "#projects",
        },
        {
          name: "Contact",
          url: "#contact",
        },
      ],
    };
  },
};
</script>
