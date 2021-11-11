<template>
  <b-link :href="link" class="footer__social-link">
    <Icon :icon="icon" class="footer__social-linkIcon" />
  </b-link>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  components: {
    Icon,
  },
};
</script>
