<template>
  <div>
    View!
    <table>
      <tr v-for="user in users" v-bind:key="user">
        <td>{{user.name}}</td>
        <td>{{user.surname}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
        <td>
          <button v-on:click="remove">Delete</button>
        </td>
        <td>
          <button v-on:click="edit">Edit</button>
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
    remove: function() {
      alert("Delete");
    },
    edit: function() {
      alert("Edit");
    }
  }

};
</script>

<style>
</style>