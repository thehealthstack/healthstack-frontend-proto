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
        <tr v-for="(patient, key) in patients" :key=key>
          <td>{{ patient.firstName }}</td>
          <td>{{ patient.lastName }}</td>
          <td>{{ patient.email }}</td>
          <td>{{ patient.telephone }}</td>
          <td>{{ patient.sex }}</td>
          <td>{{ patient.age }}</td>
          <td>
            <a class="button is-link is-expandible" @click="activateModal(4)">
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
import { getExamRequestPatients } from "@/database/index.js";

export default {
  name: "PaymentRequestListingComponent",
  data: function() {
    return {
      "patients": [],
      isActive: false,
      currentPatient: 2
    };
  },
  async created() {
    this.patients = await getExamRequestPatients();
  },
  methods: {
    activateModal(patientId) {
      this.isActive = true;
      this.currentPatient = patientId;
    },
    updateIsActive(value) {
      this.isActive = value;
    }
  },
  components: {
    "examcheckout-component": examCheckoutComponent
  }
};
</script>