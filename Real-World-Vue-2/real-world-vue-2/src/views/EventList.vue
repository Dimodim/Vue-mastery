<template>
  <div>
    <h1>Show event</h1>
    <event-card />
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
