<template>
  <div class="modal" :class="{'is-active': active}">
    <div class="modal-background"></div>
    <div class="modal-card" v-if="patient">
      <header class="modal-card-head">
        <p class="modal-card-title">Payment Confirmation</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Patient Details:</p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>
                <strong>Full Name:</strong>
                {{ patient.firstName + ' ' + patient.lastName}}
              </p>
              <p>
                <strong>Email:</strong>
                {{ patient.email}}
              </p>
              <p>
                <strong>Telephone:</strong>
                {{ patient.telephone }}
              </p>
              <p>
                <strong>Sex:</strong>
                {{ patient.sex }}
              </p>
              <p>
                <strong>Age:</strong>
                {{ patient.age }}
              </p>
            </div>
          </div>
        </div>
        <div class="card" style="margin-top: 15px;" v-if="examsNotEmpty()">
          <header class="card-header">
            <p class="card-header-title">Exam(s) Details:</p>
          </header>
          <div class="card-content">
            <div class="content">
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Exam name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(exam, key) in exams" :key=key>
                    <td>{{ exam.examName }}</td>
                    <td>{{ exam.price }}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td>
                      <strong>{{ total }}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-link is-fullwidth"
          @click="closeModal"
        >Confirm Payment & Print Receipt</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { getPatientExams, getPatientById, confirmPayment } from "@/database/index.js";
export default {
    name: "ExamCheckoutComponent",
    props: ["isActive", "currentPatient"],
    data() {
        return {
            active: this.isActive,
            currentPatientId: -1,
            patient: {},
            exams: []
        }
    },
    methods: {
        async closeModal(){
          await confirmPayment(this.currentPatient);
            if(this.active) { 
                this.$emit('isActiveUpdated', false);
                this.active = false;
            }

        },
        async getExams() {
          return getPatientExams(this.currentPatientId);
        },
        examsNotEmpty() {
          return true;
        }

    },
    computed: {
        examRequest: function() {return window.Seed.fetchPatientExamRequest(1);},
        total: function() {
            if(this.exams.length === 0) {
            return 0;
          } else {
            let reducer = (accumulator, exam) => {return parseInt(exam.price) + accumulator};
            return this.exams.reduce(reducer, 0);
          }
        }
    },
    watch: {
        async isActive(value) {
          if(value) {
              this.patient = await getPatientById(parseInt(this.currentPatient));
              this.exams = await getPatientExams(parseInt(this.currentPatient));
            }
            this.active = value;
        },
        currentPatient(value) {
            this.currentPatientId = value;
        }
    }
}
</script>

<style scoped>

</style>