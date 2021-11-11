<template>
  <b-form-group :label="label" :label-for="id" class="contact__input mb-4">
    <b-form-input
      :id="id"
      v-model="model"
      :placeholder="placeholder"
      :type="type"
      required
    ></b-form-input>
    <span v-if="error" class="contact__error red-text">{{ error }}</span>
  </b-form-group>
</template>
<script>
export default {
  name: "InputField",
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },

    model: {
      type: String,
      required: false,
    },
    error: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
