<template>
    <div class="modal" :class="{ 'is-active': active }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Register new Patient</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <div>
                <form @submit.prevent="processForm" ref="newPatientForm">
                    <section class="modal-card-body">
                        <div class="field is-grouped is-grouped-multiline">
                            <div class="control is-expanded">
                                <input v-model="firstName" class="input" type="text" placeholder="First Name" required>
                            </div>
                            <div class="control is-expanded">
                                <input v-model="lastName" class="input" type="text" placeholder="Last Name" required>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input v-model="email" class="input" type="email" placeholder="Email" required>
                                <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field is-expanded">
                                <div class="field has-addons">
                                    <p class="control">
                                    <a class="button is-static">
                                        +237
                                    </a>
                                    </p>
                                    <p class="control is-expanded">
                                    <input v-model="telephone" class="input" type="tel" placeholder="Phone Number" required>
                                    </p>
                                </div>
                        </div>
                        <div class="field is-grouped is-grouped-multiline">
                            <div class="control">
                                <div class="select">
                                    <select v-model="sex" required>
                                        <option selected disabled value="">Sex</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div class="control is-expanded">
                                <input v-model="age" class="input" type="number" placeholder="Age" number required>
                            </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <input type="submit" value="Save Patient" class="button is-link is-fullwidth">
                    </footer>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { createPatient } from "@/database/index.js";
export default {
    name: "CreatePatientComponent",
    props: ["isActive"],
    data(){
        return {
            active : this.isActive,
            discountFields: 1,
            parameterFields: 1,
            aliasFields: 1,
            firstName: "",
            lastName: "",
            email: "",
            telephone: "",
            sex: "",
            age: ""
        }
    },
    methods: {
        closeModal(){
            if(this.active) { 
                this.$emit('isActiveUpdate', false);
                this.active = false;
            }
        },
        addFields(field){
            field++;
        },
        processForm: async function() {
            let patient = {
                firstName: this.firstName,
                lastName: this.lastName,
                sex: this.sex,
                age: this.age,
                telephone: '+237' + this.telephone,
                email: this.email,
            }
            await createPatient(patient);
            this.active = false;
          }
    },
    watch: {
        isActive(value) {
            this.active = value;
        }
    }
}
</script>