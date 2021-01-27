<template>
  <div>
    <h1>Show event</h1>
    <event-card></event-card>
    <router-link :to="{ name: 'event-show', props: { id: 1 } }"
      >Show</router-link
    >
    |
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";
export default {
  name: "EventList",
  components: {
    EventCard
  }
};
</script>

<style scoped></style>
