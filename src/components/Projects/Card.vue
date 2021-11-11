<template>
  <b-row class="project__card mt-4 p-0">
    <b-link :href="link">
      <div class="project__card-image">
        <img :src="source" alt="card project" class="img-fluid" />
        <div class="project__card-content bg-light p-3">
          <b-card-title class="primary-color">{{ title }}</b-card-title>
          <b-card-text class="secondary-color">{{ description }}</b-card-text>
        </div>
      </div>
    </b-link>
  </b-row>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    source: {
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
