<template>
  <div>
    <div class="level">
      <div class="level-left">
        <newpatient-component></newpatient-component>
      </div>
      <div class="level-right">
        <searchbar-component></searchbar-component>
      </div>
    </div>
    <patienttable-component></patienttable-component>
  </div>
</template>

<script>
import patientSearchComponent from "@/components/PatientSearchComponent.vue";
import newPatientComponent from "@/components/NewPatientComponent.vue";
import patientTableComponent from "@/components/PatientTableComponent.vue";

export default {
    name: "PatientRegistrationComponent",
    components: {
        "searchbar-component": patientSearchComponent,
        "newpatient-component": newPatientComponent,
        "patienttable-component": patientTableComponent
    }
}
</script>