<template>
  <b-navbar-brand class="primary-color header__logo">
    <router-link to="/" custom v-slot="{ navigate }">
      <span @click="navigate" @keypress.enter="navigate" role="link">
        Mechack <span class="secondary-color">Tambwe</span></span
      >
    </router-link>
  </b-navbar-brand>
</template>
<script>
export default {
  name: "Logo",
};
</script>
