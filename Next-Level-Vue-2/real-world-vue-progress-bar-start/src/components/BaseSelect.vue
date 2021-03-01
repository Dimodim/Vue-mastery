<template>
      <div>
      <label v-if="label">{{ label }}</label>
       <select 
          :value="value" 
          @change="updateValue" 
          v-bind="$attrs">
            <option v-for="option in options"
              :selected="option === value"
              :value="option" 
              :key="option">
              {{ option }}
            </option>
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
