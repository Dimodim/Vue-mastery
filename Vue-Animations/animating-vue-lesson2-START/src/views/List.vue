<template>
  <div>
    <input v-model="newContact" placeholder="Name" type="text" />
    <button @click="addContact">Add Contact</button>
    <button @click="sortContact">Sort Contact</button>

    <transition-group tag="ul" name="slide-up" appear="true">
      <li v-for="(contact, index) in contacts" :key="index">
        {{ contact }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContact: '',
      contacts: ['Beau Thabeast', 'Cindy Rella', 'Alice Wunderlind']
    }
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact)
      this.newContact = ''
    },
    sortContact() {
      this.contacts.sort()
    }
  }
}
</script>
