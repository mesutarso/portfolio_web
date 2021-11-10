<template>
  <div
    class="
      skills__listItem
      d-flex
      flex-column
      justify-content-between
      align-items-start
    "
  >
    <Icon :icon="icon" class="skills__listItem-icon" />
    <span class="skills__listItem-name">{{ name }}</span>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "SkillsListItem",
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
