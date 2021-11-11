<template>
  <div>
    <b-row
      class="d-flex flex-column justify-content-between"
      v-for="(project, index) in projects"
      :key="index"
    >
      <Card
        :title="project.title"
        :description="project.description"
        :source="project.image"
        :link="project.link"
      />
    </b-row>
  </div>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "CardList",
  components: {
    Card,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>
