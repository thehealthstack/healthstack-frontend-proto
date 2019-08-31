<template>
  <div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Telephone No.</th>
          <th>Sex</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients">
          <td>{{ patient.firstName }}</td>
          <td>{{ patient.lastName }}</td>
          <td>{{ patient.email }}</td>
          <td>{{ patient.telephone }}</td>
          <td>{{ patient.sex }}</td>
          <td>{{ patient.age }}</td>
          <td>
            <a class="button is-link is-expandible" @click="activateModal(patient.patientId)">
              <span class="icon">
                <i class="fas fa-shopping-cart"></i>
              </span>
              <span>Checkout tests</span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <examcheckout-component
      :is-active="isActive"
      :current-patient="currentPatient"
      @isActiveUpdated="updateIsActive"
    ></examcheckout-component>
  </div>
</template>

<script>
import examCheckoutComponent from "@/components/ExamCheckoutComponent.vue";

export default {
  name: "PaymentRequestListingComponent",
  data: function() {
    return {
      examRequests: window.Seed.examRequests1,
      isActive: false,
      currentPatient: 1
    };
  },
  methods: {
    activateModal(patientId) {
      this.isActive = true;
      this.currentPatient = patientId;
    },
    updateIsActive(value) {
      this.isActive = value;
    },
    getPatientsWithExamRequests: function() {
      return this.examRequests.map(examRequest =>
        window.Seed.fetchPatient(examRequest.patientId)
      );
    }
  },
  computed: {
    patients: function() {
      return this.getPatientsWithExamRequests();
    }
  },
  components: {
    "examcheckout-component": examCheckoutComponent
  }
};
</script>