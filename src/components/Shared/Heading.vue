<template>
  <h1 class="heading">
    {{ title }}
  </h1>
</template>
<script>
export default {
  name: "Heading",
  props: {
    title: String,
  },
};
</script>
