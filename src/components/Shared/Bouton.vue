<template>
  <b-button :href="{ link }">{{ title }}</b-button>
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
