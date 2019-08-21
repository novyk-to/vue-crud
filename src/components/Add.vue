<template>
  <div class="add">
    Add new users:
    <div class="form">
      <input placeholder="Name" v-model="user.name" />
      <input placeholder="Surname" v-model="user.surname" />
      <input placeholder="Phone" v-model="user.phone" />
      <input placeholder="email" v-model="user.email" />
      <button v-on:click="save">Save!</button>
    </div>
    <div>
      <label>
        Import
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: null
  },
  data() {
    return {
      file: "",
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
      const users =
        localStorage.getItem("users") == null
          ? []
          : JSON.parse(localStorage.getItem("users"));
      users.push(this.user);
      localStorage.setItem("users", JSON.stringify(users));
      this.$router.push({ name: "view" });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      const filerReader = new FileReader();
      const _this = this;

      filerReader.onload = (function(reader) {
        return function() {
          const newusers = JSON.parse(reader.result);
          const users =
            localStorage.getItem("users") == null
              ? []
              : JSON.parse(localStorage.getItem("users"));
          users.push(newusers);
          localStorage.setItem("users", JSON.stringify(users));
          _this.$router.push({ name: "view" });
        };
      })(filerReader);

      filerReader.readAsText(this.file);
    }
  }
};
</script>

<style>
.add {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 20px;
}
.form {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
</style>