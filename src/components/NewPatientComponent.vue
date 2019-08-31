<template>
   <div>
        <a class="button is-link is-expandible" @click="activateModal">
            <span class="icon">
            <i class="fas fa-user-plus"></i>
            </span>
            <span>Create new Patient</span>
        </a>
        <createpatient-component :is-active="isActive" @isActiveUpdate="updateIsActive"></createpatient-component>
    </div> 
</template>

<script>
import createPatientComponent from "@/components/CreatePatientComponent.vue";

export default {
    name: "NewPatientComponent",
    components: {
        "createpatient-component": createPatientComponent
    },
    methods: {
        activateModal(){
            this.isActive = true;
        },
        updateIsActive(value){
            this.isActive = value;
        }
    },
    data(){
        return {
            isActive: false
        }
    },
    computed: {
        classObject(){
            return {
                "is-active": this.isActive,
            };
        }
    }
}
</script>