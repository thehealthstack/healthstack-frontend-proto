<template>
    <div>
        <a class="button is-link" @click="activateModal">Create Exam</a>
        <newexam-component @close="closeModal" :isActive="isActive"></newexam-component>
    </div>
</template>

<script>
import newExamComponent from "@/components/NewExamComponent.vue";
export default {
    name: "CreateNewExamComponent",
    components: {
        "newexam-component": newExamComponent,
    },
    methods: {
        activateModal(){
            this.isActive = true;
        },
        closeModal(event){
            this.isActive = false;
        }
    },
    data(){
        return {
            isActive: false,
        }
    }
}
</script>