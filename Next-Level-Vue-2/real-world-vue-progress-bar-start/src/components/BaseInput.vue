<template>
      <div>
        <label v-if="label">{{ label }}</label>
        <input
          @input="updateValue"
          :value="value"
          v-bind="$attrs"
        />
      </div>
    </template>
    
<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: String
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
