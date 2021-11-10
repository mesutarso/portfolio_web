<template>
  <div class="skills__list">
    <SubHeading :title="skillsTitle" class="secondary-color mt-4" />
    <b-row cols-lg="4" cols-md="3" cols-sm="3" class="mt-4">
      <b-col v-for="skill in skills" :key="skill.name" class="my-auto">
        <SkillsListItem :icon="skill.icon" :name="skill.name" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import SubHeading from "../Shared/SubHeading.vue";
import SkillsListItem from "./ListItem.vue";
export default {
  name: "SkillsList",
  props: {
    skills: {
      type: Array,
      required: true,
    },
    skillsTitle: {
      type: String,
      required: true,
    },
  },
  components: {
    SubHeading,
    SkillsListItem,
  },
};
</script>
