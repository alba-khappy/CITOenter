<template lang="pug">
.checkbox
  input.visually-hidden(
    type="checkbox",
    name="checkbox",
    v-model="checked",
    :id="checkboxId"
  )
  label(:for="checkboxId") {{ checkboxLabel }}
</template>

<script>
export default {
  name: "checkbox",
  props: {
    checkboxLabel: {
      type:String,
      required: true,
      }, 
    checkboxId: {
      type:String,
      required: true,
    },
},
  data() {
    return {
      checked: [],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.checkbox {
  display: inline-block;
  margin-bottom: 10px;
}

.checkbox label {
  position: relative;
  font-size: 14px;
  line-height: 18px;
  color: #a4a9b9;
  background-color: #e4e4e4;
  padding: 2px 10px;
  margin-right: 10px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 18px;
    top: 0;
  }
}

.checkbox input:checked + label {
  color: $whiteColor;
  background-color: $blueColor;
}

.checkbox input:checked + label::after {
  left: -42px;
  top: 1px;
}
</style>