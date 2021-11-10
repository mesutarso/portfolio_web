<template>
  <div class="description text-color">
    {{ content }}
  </div>
</template>
<script>
export default {
  name: "Description",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
