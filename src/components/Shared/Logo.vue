<template>
  <b-navbar-brand to="/" class="header__logo"
    >Mechack <span class="secondary-color">Tambwe</span></b-navbar-brand
  >
</template>
<script>
export default {
  name: "Logo",
  props: {
    color: {
      type: String,
      default: "primary-color",
    },
  },
};
</script>
