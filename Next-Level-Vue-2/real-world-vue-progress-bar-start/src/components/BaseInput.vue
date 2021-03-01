<template>
      <div>
        <label v-if="label">{{ label }}</label>
         <input :value="value" v-bind="$attrs" v-on="listeners">
      </div>
    </template>
    
<script>
import { formFieldMixin } from '../mixins/FormFieldMixin'
export default {
  mixins:[formFieldMixin],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  },
}
</script>
