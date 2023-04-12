<template>
  <div class="modal">
    <button class="btn" @click="isModalShow = true">
      Добавить
    </button>
    <div v-if="isModalShow" class="container">
      <form class="popupForm">
        <span class="close" @click="isModalShow = false"></span>
        <fieldset class="form">
          <div class="input-container">
            <label for="name">Имя</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="input-container">
            <label for="phone">Телефон</label>
            <input type="text" id="phone" v-model="phone" required />
          </div>
          <div class="input-container">
            <span>Начальник</span>
            <select v-model="chief">
              <option disabled value=""></option>
              <option v-for="user in sortedUsers" :value="user.id">
                {{ user.name }}
              </option>
            </select>
          </div>
          <button
            class="btn btn-save"
            :disabled="!name"
            @click.prevent="addUser"
          >
            Сохранить
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      name: null,
      phone: null,
      chief: null,
      isModalShow: false
    };
  },
  computed: mapGetters(["sortedUsers"]),
  methods: {
    addUser() {
      this.$store.commit("addUser", {
        name: this.name,
        phone: this.phone,
        chief: this.chief
      });
      this.isModalShow = false;
      this.name = null;
      this.phone = null;
      this.chief = null;
    }
  }
};
</script>

<style scoped>
.btn {
  color: #ffffff;
  font-size: 16px;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  background-color: rgb(37, 137, 255);
  cursor: pointer;
  transition: background-color linear 0.4s;
}
.btn-save {
  width: 10em;
  align-self: center;
}
.btn:hover {
  background-color: rgb(91, 165, 249);
}
.modal {
  display: flex;
  margin-bottom: 40px;
}
.container {
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(140 134 134 / 70%);
}
.popupForm {
  z-index: 999;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 35px;
  background-color: white;
  border-radius: 8px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: none;
  border-radius: 8px;
  padding: 30px;
}
.input-container {
  display: flex;
  gap: 20px;
  height: 30px;
  align-items: baseline;
  justify-content: space-between;
}
input,
select {
  border: 1px solid #ddd;
  border-radius: 3px;
  height: 30px;
  min-width: 200px;
}

input:focus,
select:focus {
  outline: none !important;
  border: 1px solid 8bafd6;
  box-shadow: 0 0 5px #719ece;
}
.close {
  position: absolute;
  right: 0px;
  top: 10px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 15px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
