<template>
    <div class="modal" :class="{'is-active': isActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Result Verification</p>
                <button class="delete" aria-label="close" @click="emitCloseModalEvent"></button>
            </header>
            <section class="modal-card-body">
                <header class="card-header">
                    <patientinfo-component :examRequest="examRequest"></patientinfo-component>
                </header>
                <div class="card-content">
                    <examresult-component :result="exam" v-for="(exam, key) in examRequest.exams" :key="key"></examresult-component>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Validate</button>
                <button class="button" @click="emitCloseModalEvent">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
import patientInfoComponent from "@/components/PatientInfoComponent.vue";
import examResultComponent from "@/components/ExamResultComponent.vue";

export default {
    name: "ResultVerificationComponent",
    props: ["examRequest", "isActive"],
    methods: {
        emitCloseModalEvent(){
            this.$emit("close");
        }
    },
    components: {
        "patientinfo-component": patientInfoComponent,
        "examresult-component": examResultComponent,
    },
    data(){
        return {
            patient: {},
            patientResults: [],
        }
    }
}
</script>