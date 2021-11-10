<template>
  <b-card class="skills__card">
    <div class="skills__card-icon">
      <Icon :icon="iconClass" class="secondary-color" />
    </div>
    <div class="skills__card-title">
      <SubHeading :title="cardTitle" class="secondary-color" />
    </div>
    <div class="skills__card-description">
      <Description :content="cardContent" class="white-color" />
    </div>
  </b-card>
</template>
<script>
import { Icon } from "@iconify/vue2";
import SubHeading from "../Shared/SubHeading.vue";
import Description from "../Shared/Description.vue";
export default {
  name: "SkillsCard",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    cardTitle: {
      type: String,
      required: true,
    },
    cardContent: {
      type: String,
      required: true,
    },
  },
  components: {
    Icon,
    SubHeading,
    Description,
  },
};
</script>
