<template>
  <b-nav-item>
    <router-link :to="link" custom v-slot="{ navigate }">
      <span @click="navigate" @keypress.enter="navigate" role="link">{{
        title
      }}</span>
    </router-link>
  </b-nav-item>
</template>
<script>
export default {
  name: "NavItem",
  props: ["title", "link"],
};
</script>
