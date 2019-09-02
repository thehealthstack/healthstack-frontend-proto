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
          <th></th>
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
            <button class="button is-link" @click="activateModal(patient.patientId)">Order Test</button>
          </td>
        </tr>
      </tbody>
    </table>
    <testordering-component
      :is-active="isActive"
      :patient-id="patientId"
      @modalActiveStatusUpdated="updateIsActive"
    ></testordering-component>
  </div>
</template>

<script>
import testOrderingComponent from "@/components/TestOrderingComponent.vue";
import { getAllPatients } from "@/database/index.js"

export default {
    name: "PatientTableComponent",
    data: function() {
        return {
            "patients": [],
            isActive: false,
            patientId: -1
        }
    },
    async created() {
      this.patients = await getAllPatients();
    },
    methods: {
        activateModal(patientId){
            this.isActive = true;
            this.patientId = patientId;
        },
        updateIsActive(value){
            this.isActive = value;
        }
    },
    components: {
        "testordering-component": testOrderingComponent
    }
}
</script>