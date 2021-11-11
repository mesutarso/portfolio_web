<template>
  <img :src="source" alt="Ilustaration" class="img-fluid" />
</template>
<script>
export default {
  name: "Illustration",
  props: {
    source: {
      type: String,
      required: true,
    },
  },
};
</script>
