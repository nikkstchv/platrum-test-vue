<template>
  <div id="app">
    <div class="сontainer">
      <AddNewUserModal />
      <Table />
    </div>
  </div>
</template>

<script>
import Table from "./components/Table";
import AddNewUserModal from "./components/AddNewUserModal.vue";

export default {
  name: "App",
  components: {
    Table,
    AddNewUserModal
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600;700&family=Roboto&display=swap");

* {
  box-sizing: border-box;
}
body {
  margin: auto;
}
#app {
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
.сontainer {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
