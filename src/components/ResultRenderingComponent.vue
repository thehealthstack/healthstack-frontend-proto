<template>
  <div>
    <searchpatientfile-component></searchpatientfile-component>
    <table class="table is-fullwidth">
      <resultrenderingtablehead-component></resultrenderingtablehead-component>
      <resultrenderingrow-component
        :patientExamFile="patientExamFile"
        v-for="patientExamFile in patientExamFiles"
      ></resultrenderingrow-component>
    </table>
  </div>
</template>

<script>
import searchPatientFileComponent from "@/components/SearchPatientFileComponent.vue";
import resultRenderingRowComponent from "@/components/ResultRenderingRowComponent.vue";
import resultRenderingTableHeadComponent from "@/components/ResultRenderingTableHeadComponent.vue";

export default {
    name: "ResultRenderingComponent",
    components: {
         "searchpatientfile-component": searchPatientFileComponent,
         "resultrenderingtablehead-component": resultRenderingTableHeadComponent,
         "resultrenderingrow-component": resultRenderingRowComponent
    },
    props: ["patientExamFiles"]
}
</script>