<template>
  <div class="view">
    Users:
    <router-link to="/add">Add</router-link>
    <table class="list">
      <tr v-for="(user, index) in users" v-bind:key="index">
        <td>{{user.name}}</td>
        <td>{{user.surname}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
        <td>
          <button v-on:click="remove(index)">Delete</button>
        </td>
        <td>
          <button v-on:click="edit(index)">Edit</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function() {
    const users =
      localStorage.getItem("users") == null
        ? []
        : JSON.parse(localStorage.getItem("users"));
    return {
      users
    };
  },
  methods: {
    remove: function(index) {
      this.users.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(this.users));
    },
    edit: function(index) {
      this.$router.push({ name: "edit", params: { index: index } });
    }
  }
};
</script>

<style>
.view {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 20px;
}
.list {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border: solid 3px;
  padding: 5px;
}
</style>