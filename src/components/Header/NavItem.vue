<template>
  <b-nav-item>
    <router-link :to="link" class="nav-link">
      {{ title }}
    </router-link>
  </b-nav-item>
</template>
<script>
export default {
  name: "NavItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
