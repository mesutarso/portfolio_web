<template>
  <b-link class="btn-link">
    <router-link :to="link" custom v-slot="{ navigate }">
      <span @click="navigate" @keypress.enter="navigate" role="link">
        {{ title }}</span
      >
    </router-link>
  </b-link>
</template>
<script>
export default {
  name: "Bouton",
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
