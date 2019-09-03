<template>
  <div>
    <searchpatientfile-component></searchpatientfile-component>
    <table class="table is-fullwidth">
      <resultrenderingtablehead-component></resultrenderingtablehead-component>
      <resultrenderingrow-component
        :examRequest="examRequest"
        :key="key"
        v-for="(examRequest, key) in examRequests"
      ></resultrenderingrow-component>
    </table>
  </div>
</template>

<script>
import searchPatientFileComponent from "@/components/SearchPatientFileComponent.vue";
import resultRenderingRowComponent from "@/components/ResultRenderingRowComponent.vue";
import resultRenderingTableHeadComponent from "@/components/ResultRenderingTableHeadComponent.vue";
import { getAllExamRequests, getCompleteExamReqeuestById } from "@/database/index.js";

export default {
  name: "ResultRenderingComponent",
  components: {
    "searchpatientfile-component": searchPatientFileComponent,
    "resultrenderingtablehead-component": resultRenderingTableHeadComponent,
    "resultrenderingrow-component": resultRenderingRowComponent
  },
  data(){
    return {
      examRequests: []
    }
  },
  async created(){
        let availExamRequests = await getAllExamRequests();
        let examRequests = [];
        availExamRequests.map(async request => {
            let examRequest = await await getCompleteExamReqeuestById(request.examRequestId);
            examRequests.push(examRequest);
        });
        this.examRequests = examRequests;
  }
};
</script>