<template>
  <b-form-group
    :id="'groupe-' + id"
    :label="label"
    label-for="id"
    class="contact__select mb-4"
  >
    <b-form-select
      :id="id"
      v-model="model"
      :options="options"
      class="form-select"
      required
    ></b-form-select>
    <span v-if="error" class="contact__error red-text">{{ error }}</span>
  </b-form-group>
</template>
<script>
export default {
  name: "SelectField",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    error: {
      type: String,
      required: false,
    },
  },
};
</script>