<template>
  <div>
    <h1>Show event</h1>
    <router-link :to="{ name: 'event-show', props: { id: 1 } }"
      >Show</router-link
    >
    |
  </div>
</template>

<script>
export default {
  name: "EventList"
};
</script>

<style scoped></style>
