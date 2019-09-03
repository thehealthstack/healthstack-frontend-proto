<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Patient Result Sheet</p>
        <button class="delete" aria-label="close" @click="emitCloseRegistrationModalEvent"></button>
      </header>
      <section class="modal-card-body">
        <header class="card-header">
          <patientinfo-component :examRequest="examRequest"></patientinfo-component>
        </header>
        <div class="card-content">
          <examresultregistration-component :exam="exam" v-for="(exam, key) in examRequest.exams" :key="key"></examresultregistration-component>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="registerResults">Save changes</button>
        <button class="button is-success" @click="completeRegistration">Done</button>
        <button class="button is-info" @click="emitCloseRegistrationModalEvent">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import patientInfoComponent from "@/components/PatientInfoComponent.vue";
import examResultRegistrationComponent from "@/components/ExamResultRegistrationComponent.vue";
import { editExamRequestById } from "@/database/index.js";

export default {
    name: "ResultRegistrationComponent",
    methods: {
        emitCloseRegistrationModalEvent(){
            this.$emit("closeregistration");
        },
        async registerResults(){
          try{
            let examRequest = await editExamRequestById(this.examRequest);
          }catch(err){
            console.error(err);
          }
          this.$emit("closeregistration");
        },
        async completeRegistration(){
          this.examRequest.status = "Result Registered";
          try{
            let examRequest = await editExamRequestById(this.examRequest);
          }catch(err){
            console.error(err);
          }
          this.$emit("closeregistration");
        }
    },
    components: {
        "patientinfo-component": patientInfoComponent,
        "examresultregistration-component": examResultRegistrationComponent,
    },
    props: ["examRequest", "isActive"]
}
</script>