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
    <button @click="onButtonClicked">Dispatch</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'EventCreate',
  data() {
      return {
          event:{}
      }
  },
  // computed: mapState(['categories', 'user']) - this is also an option
  computed: {
    ...mapGetters({
      catCount: 'getCategoryLength',
      getEvent: 'getEventById'
    }),
    ...mapState({
      user: state => state.user, // either this or the bottom one or without mapState it will be this.store.state.user
      categories: 'categories' // can be used both ways
    }),
    methods: {
      createEvent() {
        const user = this.$store.state.user
        const id = Math.floor(Math.random() * 10000000)
        this.event=  {
          id: id,
          user: user,
          category: '',
          organizer: user,
          title: '',
          description: '',
          location: '',
          date: '',
          time: '',
          attendees: []
        }
      },
      onButtonClicked() {
        this.$store
          .dispatch('createEvent', this.event)
          .then(() => {
           
            this.event = this.createEvent()
          })
          .catch(() => {
            console.log('There was a problem creating your event')
          })
      }
    }
  }
}
</script>

<style scoped></style>
