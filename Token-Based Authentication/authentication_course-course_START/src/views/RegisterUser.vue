<template>
      <div>
        <form>
          <label for="name">
            Name:
          </label>
          <input v-model="name" type="text" name="name" value>
    
          <label for="email">
            Email:
          </label>
          <input v-model="email" type="email" name="email" value>
    
          <label for="password">
            Password:
          </label>
          <input v-model="password" type="password" name value>
    
          <button type="submit" name="button">
            Register
          </button>
        </form>
      </div>
    </template>

<script>
    export default {
         data () {
        return {
          name: '',
          email: '',
          password: ''
        }
      },
    }
</script>

<style lang="scss" scoped>

</style>