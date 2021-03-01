<template>
      <div>
        <label v-if="label">{{ label }}</label>
         <input :value="value" v-bind="$attrs" v-on="listeners">
      </div>
    </template>
    
<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: String
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
