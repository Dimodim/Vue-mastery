<template>
  <div>
    <h1>Show event</h1>
    <event-card
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></event-card>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";
import EventService from "../services/EventService";
export default {
  name: "EventList",
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    EventService.getEvents()
      .then(r => (this.events = r.data))
      .catch(err => {
        console.log(err.response);
      });
  }
};
</script>

<style scoped></style>
