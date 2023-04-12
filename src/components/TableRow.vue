<template>
  <div>
    <div class="row">
      <div class="cell first-cell">
        <button
          class="expand-btn"
          v-if="children.length"
          @click="toggleRowShow"
        >
          {{ isShown ? "-" : "+" }}
        </button>
        <div class="cell-content">{{ row.name }}</div>
      </div>
      <div class="cell second-cell">
        <div class="cell-content">{{ row.phone }}</div>
      </div>
    </div>
    <div v-if="isShown">
      <TableRow
        class="recursive-row"
        v-for="child in children"
        :key="child.id"
        :row="child"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false
    };
  },
  props: ["row"],
  computed: {
    children() {
      return this.$store.getters.getChildren(this.row.id);
    }
  },
  methods: {
    toggleRowShow() {
      this.isShown = !this.isShown;
    }
  }
};
</script>

<style scoped>
.table {
  display: flex;
}
.row {
  display: flex;
  justify-content: flex-end;
  border: 1px solid #ddd;
}

.cell {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 10px;
}
.first-cell {
  flex-shrink: 1;
  width: 100%;
}
.second-cell {
  min-width: 350px;
  justify-content: center;
}
.recursive-row {
  margin-left: 20px;
}
.cell-content {
  margin-left: 15px;
  color: rgba(51, 44, 41, 0.65);
  text-align: center;
}

.expand-btn {
  border: 1px solid #ddd;
  border-radius: 2px;
  width: 21px;
}
</style>
