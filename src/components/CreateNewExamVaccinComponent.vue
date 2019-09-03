<template>
    <div>
        <div class="field is-grouped">
            <p class="control">
                <a class="button is-link" @click="activateExamModal" style="margin-left: 1%">Create Exam</a>
            </p>
            <p class="control">
                <a class="button is-link" @click="activateVaccinModal">Create Vaccin</a>
            </p>
        </div>
        <newexam-component @close="closeExamModal" :isActive="isExamActive"></newexam-component>
        <newvaccin-component @close="closeVaccinModal" :isActive="isVaccinActive"></newvaccin-component>
    </div>
</template>

<script>
import newExamComponent from "@/components/NewExamComponent.vue";
import newVaccinComponent from "@/components/NewVaccinComponent.vue";

export default {
    name: "CreateNewExamComponent",
    components: {
        "newexam-component": newExamComponent,
        "newvaccin-component": newVaccinComponent,
    },
    methods: {
        activateExamModal(){
            this.isExamActive = true;
        },
        closeExamModal(event){
            this.isExamActive = false;
        },
        activateVaccinModal(){
            this.isVaccinActive = true;
        },
        closeVaccinModal(event){
            this.isVaccinActive = false;
        }
    },
    data(){
        return {
            isExamActive: false,
            isVaccinActive: false,
        }
    }
}
</script>