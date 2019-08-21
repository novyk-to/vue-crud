<template>
  <div class = "edit">
    Edit user:
    <div class = "editform">
    <input placeholder="Name" v-model="user.name" />
    <input placeholder="Surname" v-model="user.surname" />
    <input placeholder="Phone" v-model="user.phone" />
    <input placeholder="email" v-model="user.email" />
    <button v-on:click="save">Save!</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: null
  },
  data() {
    const users =
      localStorage.getItem("users") == null
        ? []
        : JSON.parse(localStorage.getItem("users"));

    return {
      user: users[this.index]
    };
  },
  methods: {
    save: function() {
      const users =
        localStorage.getItem("users") == null
          ? []
          : JSON.parse(localStorage.getItem("users"));
      users[this.index] = this.user;
      localStorage.setItem("users", JSON.stringify(users));
      this.$router.push({ name: 'view' });
    }
  }
};
</script>

<style>
.edit {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 20px;
}
.editform {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
</style>