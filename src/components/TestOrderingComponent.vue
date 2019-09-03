<template>
  <div class="modal" :class="{'is-active': active}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Order Test(s)</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Doctor's Details:</p>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="field">
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="doctorFullName"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input class="input" type="email" v-model="doctorEmail" placeholder="Email" />
                  </div>
                </div>
                <div class="field is-expanded">
                  <div class="field has-addons">
                    <p class="control">
                      <a class="button is-static">+237</a>
                    </p>
                    <p class="control is-expanded">
                      <input
                        v-model="doctorTelephone"
                        class="input"
                        type="tel"
                        placeholder="Phone Number"
                        required
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style="margin-top:15px;">
            <header class="card-header">
              <p class="card-header-title">Test(s) Details:</p>
            </header>
            <div class="card-content">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">Test Selection:</p>
                </header>
                <div class="card-content">
                  <form @submit.prevent="addExam">
                    <div class="field">
                      <div class="contsrol is-expanded">
                        <div class="select is-large is-fullwidth">
                          <select v-model="examId" required>
                            <option selected disabled value>Select Test / Vaccination...</option>
                            <option v-for="(exam, key) in exams" :value="exam.examId" :key="key">{{ exam.examName }}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="control">
                      <input type="submit" value="Add Test" class="button is-link is-fullwidth" />
                    </div>
                  </form>
                </div>
              </div>
              <div class="card" style="margin-top: 10px;">
                <div class="card-content">
                  <div v-show="isTestOrdered">
                    <table class="table is-fullwidth">
                      <thead>
                        <tr>
                          <th>Test Name</th>
                          <th>Remove</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(exam, key) in orderedExams" :key="key">
                          <td>{{ exam.examName}}</td>
                          <td>
                            <button class="button is-link" @click="removeExam(exam.examId)">
                              <span class="icon is-small">
                                <i class="far fa-trash-alt"></i>
                              </span>
                            </button>
                          </td>
                          <td>{{ exam.price }}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td></td>
                          <td>
                            <strong>{{ total }}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-show="!isTestOrdered">
                    <strong>No Test Has Been Selected</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 15px;">
            <button class="button is-link is-fullwidth is-large" @click="submitOrder" :disabled=isFormReady>Submit</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getAllExams, getExamById, getOrderedExams, getExamOrderTotal, createExamRequest } from "@/database/index.js";
export default {
    name: "TestOrderingComponent",
    props: ["isActive", "patientId"],
    data() {
        return {
            active: this.isActive,
            doctorFullName: null,
            doctorEmail: null,
            doctorTelephone: null,
            testsOrdered: [],
            examId: '',
            currentPatientId: this.patientId,
            exams: [],
            orderedExams: []
        }
    },
    async created() {
      this.exams = await getAllExams();
    },
    methods: {
        closeModal(){
            if(this.active) { 
                this.$emit('modalActiveStatusUpdated', false);
                this.active = false;
            }
        },
        async submitOrder() {
          let exams = this.testsOrdered.map(examId => {return {examId: examId, status: "requested"}})
            if(this.validateOrder()) {
                await createExamRequest({
                  patientId: this.currentPatientId,
                  doctor: {
                      name: this.doctorFullName,
                      email: this.doctorEmail,
                      telephone: this.doctorTelephone
                  },
                  exams: exams
                });
                this.closeModal();
                this.currentPatientId = -1;
            }
        },
        validateOrder() {
            return (this.doctorFullName && this.doctorEmail && this.doctorTelephone && this.isTestOrdered && this.currentPatientId != -1);
        },
        async addExam() {
            this.testsOrdered.push(this.examId);
            this.orderedExams = await getOrderedExams(this.testsOrdered);
        },
        async removeExam(examId) {
            let index = this.testsOrdered.indexOf(examId);
            if(index != -1) {
                this.testsOrdered.splice(index, 1)
            }
            this.orderedExams = await getOrderedExams(this.testsOrdered);
        }
    },
    computed: {
        isTestOrdered: function() {
            return this.testsOrdered.length >= 1;
        },
        total: function() {
          if(this.orderedExams.length === 0) {
            return 0;
          } else {
            let reducer = (accumulator, exam) => {return parseInt(exam.price) + accumulator};
            return this.orderedExams.reduce(reducer, 0);
          }
        },
        isFormReady: function() {
          return !this.validateOrder();
        }
    },
    watch: {
        isActive(value) {
            this.active = value;
        },
        patientId(value) {
            this.currentPatientId = value;
        }
    }
}
</script>