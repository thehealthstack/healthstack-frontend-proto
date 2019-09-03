<template>
  <div class="modal" :class="{'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Request Demo</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <div class="control">
            <input
              class="input is-link"
              type="text"
              placeholder="First Name"
              v-model="fields.firstName"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input is-link"
              type="text"
              placeholder="Last Name"
              v-model="fields.lastName"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input is-link" type="email" placeholder="Email" v-model="fields.email" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input is-link"
              type="telephone"
              placeholder="Telephone"
              v-model="fields.telephone"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input is-link"
              type="text"
              placeholder="Laboratory"
              v-model="fields.laboratory"
            />
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-link" @click="saveData">Save changes</button>
      </footer>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "requestdemo",
  data() {
    return {
      fields: {
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        email: "",
        laboratory: ""
      }
    };
  },
  props: ["isActive"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
    saveData() {
      axios({
        method: "get",
        url:
          "https://script.google.com/macros/s/AKfycbzoh2JYTlCNZGORRTMWMVxaFjggIhMIliwwXuMXtmAIXU3pKl0/exec",
        params: {
          firstName: this.fields.firstName,
          lastName: this.fields.lastName,
          email: this.fields.email,
          telephone: this.fields.telephone,
          laboratory: this.fields.laboratory
        }
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });

      this.$emit("close");
    }
  }
};
</script>