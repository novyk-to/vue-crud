<template>
  <div>
    Add!
    <input placeholder="Name" v-model="user.name" />
    <input placeholder="Surname" v-model="user.surname" />
    <input placeholder="Phone" v-model="user.phone" />
    <input placeholder="email" v-model="user.email" />
    <button v-on:click="save">Add!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        surname: "",
        phone: "",
        email: ""
      }
    };
  },
  methods: {
    save: function() {
      const users = localStorage.getItem("users") == null ?  [] : JSON.parse(localStorage.getItem("users"));
      users.push(this.user);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
};
</script>

<style>
</style>