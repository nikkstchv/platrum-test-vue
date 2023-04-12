<template>
  <section>
    <header class="header">
      <div class="header-title" @click="toggleSort('name')"><b>Имя</b></div>
      <div class="header-title" @click="toggleSort('phone')">
        <b>Телефон</b>
      </div>
    </header>
    <main class="main">
    <div v-for="row in sortedUsers">
      <TableRow
        v-if="!row.chief"
        :key="row.id"
        :row="row"
      />
    </div>

    </main>
  </section>
</template>

<script>
import TableRow from "./TableRow.vue";
import { mapGetters } from "vuex";

export default {
  name: "Table",
  components: [TableRow],
  computed: mapGetters(['sortedUsers']),
  methods: {
    toggleSort(name) {
      this.$store.commit("toggleSort", name);
    }
  },
  components: { TableRow }
};
</script>

<style scoped>
.header {
  display: flex;
  width: fit-content;
}

.header-title {
  border: 1px solid #ddd;
  cursor: pointer;
  width: 350px;
  padding: 10px 0;
}
.main {
  max-width: 700px;
}
</style>
