<template>
      <div>
        <label v-if="label">{{ label }}</label>
        <select :value="value" v-on="$listeners" @change="updateValue" v-bind="$attrs">
          <option
            v-for="option in options"
            :value="option"
            :key="option.id"
            :selected="option === value"
          >{{ option }}</option>
        </select>
      </div>
    </template>
    
<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: String,
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
