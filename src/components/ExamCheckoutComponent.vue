<template>
  <div class="modal" :class="{'is-active': active}">
    <div class="modal-background"></div>
    <div class="modal-card">
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
        <div class="card" style="margin-top: 15px;">
          <header class="card-header">
            <p class="card-header-title">Patient Details:</p>
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
                  <tr v-for="exam in exams">
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
export default {
    name: "ExamCheckoutComponent",
    props: ["isActive", "currentPatient"],
    data() {
        return {
            active: this.isActive,
            currentPatientId: this.currentPatient,
            examIds: [1,2],
            exams1: {}
        }
    },
    methods: {
        closeModal(){
            if(this.active) { 
                this.$emit('isActiveUpdated', false);
                this.active = false;
            }
        }

    },
    computed: {
        patient: function() {return window.Seed.fetchPatient(this.currentPatientId);},
        examRequest: function() {return window.Seed.fetchPatientExamRequest(1);},
        exams: function() {
            let exams = window.Seed.fetchPatientExamRequest(this.currentPatientId).exams;
            return exams.map(exam => window.Seed.fetchExam(exam.examId));
        },
        total: function() {
            let exams = window.Seed.fetchPatientExamRequest(this.currentPatientId).exams;
            return exams.reduce((accumulator, exam) => {
                return accumulator + parseInt(window.Seed.fetchExam(exam.examId).price)
            }, 0);
        }
    },
    watch: {
        isActive(value) {
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