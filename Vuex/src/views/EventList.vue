<template>
      <div>
        <div>
        <h1>Events for {{ user.name }}</h1>
        <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
        <template v-if="page != 1">
          <router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev">Prev Page</router-link> | 
        </template>
        <template v-if="page < totalPages">
          <router-link :to="{ name: 'event-list', query: { page: page + 1 } }">Next Page</router-link>
        </template>
      </div>
      </div>
    </template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3, // <-- How many items to display per page
      page: this.page // <-- What page we're on
    })
  },
  computed: {
    page() {
      // What page we're currently on
      return parseInt(this.$route.query.page) || 1
    },
    totalPages() {
      return this.$store.state.pageCount
    },
    ...mapState(['event', 'user'])
  }
}
</script>
