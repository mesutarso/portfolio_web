<template>
  <b-nav-item>
    <b-nav-item :to="link" v-scroll-to="link" class="nav-link">{{
      title
    }}</b-nav-item>
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
