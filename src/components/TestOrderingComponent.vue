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
            <button class="button is-link is-fullwidth is-large" @click="submitOrder">Submit</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getAllExams, getExamById } from "@/database/index.js";
export default {
    name: "TestOrderingComponent",
    props: ["isActive", "patientId"],
    data() {
        return {
            active: this.isActive,
            doctorFullName: '',
            doctorEmail: '',
            doctorTelephone: '',
            testsOrdered: [],
            examId: '',
            currentPatientId: this.patientId,
            exams: []
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
        submitOrder() {
            if(this.validateOrder()) {
                window.Seed.addExamRequest(
                    this.currentPatientId,
                    {
                        name: this.doctorFullName,
                        email: this.doctorEmail,
                        telephone: this.doctorTelephone
                    },
                    this.testsOrdered
                );
                this.closeModal();
            }
        },
        validateOrder() {
            return true;
        },
        addExam() {
            this.testsOrdered.push(this.examId)
        },
        removeExam(examId) {
            let index = this.testsOrdered.indexOf(examId);
            if(index != -1) {
                this.testsOrdered.splice(index, 1)
            }
        },
        async fetchExams() {
            let exams = [];
            for(let testId in this.testsOrdered) {
                let exam = await getExamById(testId);
                exams.push(exam);
            }
            return exams;
        }
    },
    computed: {
        isTestOrdered: function() {
            return this.testsOrdered.length >= 1;
        },
        orderedExams: async function() {
            let exams = [];
            for(let testId in this.testsOrdered) {
                let exam = await getExamById(testId);
                exams.push(exam);
            }
            return await exams;
        },
        total: function() {
            return this.testsOrdered.reduce(async (accumulator, currentExamId) => {
                return accumulator + parseInt((await getExamById(currentExamId)).price);
            }, 0)
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