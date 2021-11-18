<template>
  <b-form-group :label="label" :label-for="id" class="contact__input mb-4">
    <b-form-input
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="handleInput"
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
    value: {
      required: false,
      default: "",
    },
    error: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>
