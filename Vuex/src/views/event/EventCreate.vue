<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>There are {{ getEvent(1) }} event</p>
    
    <p>There are {{ catCount }} categories</p>
    <ul>
        <div v-for="category in categories" :key="category">
        {{ category }}
        </div>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'EventCreate',
  // computed: mapState(['categories', 'user']) - this is also an option
  computed: {
      ...mapGetters({
      catCount: 'getCategoryLength',
      getEvent: 'getEventById'
    }),
      ...mapState({
      user: state => state.user, // either this or the bottom one or without mapState it will be this.store.state.user
      categories: 'categories' // can be used both ways
  })
  }
}
</script>

<style scoped></style>
