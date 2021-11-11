<template>
  <b-nav-item>
    <b-link :href="link" class="nav-link">
      {{ title }}
    </b-link>
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
