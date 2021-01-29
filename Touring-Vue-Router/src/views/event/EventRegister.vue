<template>
  <p>Register for the event here</p>
  <button @click="register"></button>
</template>
<script>
export default {
  props: ['event'],
  methods: {
    register(){
      this.$router.push({
        // we can also use replace - replace disables the back button
        // or we can use go(1) this is like clicking  the forward button or (-1) for the back button
        name: 'EventDetails',
        params:{ id: this.event.id }
      });
    }
  }
}
</script>