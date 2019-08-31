<template>
    <div>
        <a class="button is-link" @click="activateModal">Create Vaccin</a>
        <newvaccin-component @close="closeModal" :isActive="isActive"></newvaccin-component>
    </div>
</template>

<script>
import newVaccinComponent from "@/components/NewVaccinComponent.vue";

export default {
    name: "CreateNewVaccinComponent",
    components: {
        "newvaccin-component": newVaccinComponent,
    },
    methods: {
        activateModal(evt){
            this.isActive = true;
        },
        closeModal(evt){
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