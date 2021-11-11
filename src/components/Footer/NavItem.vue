<template>
  <li class="footer__nav-item">
    <b-link :href="link" class="footer__nav-link white-color">
      {{ title }}
      <slot></slot>
    </b-link>
  </li>
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
