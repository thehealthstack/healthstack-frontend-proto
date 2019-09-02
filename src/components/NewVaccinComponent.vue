<template>
   <div class="modal" :class="{ 'is-active': isActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">Create / Update Vaccin</p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <div class="control">
                        <input class="input is-link" type="text" v-model="fields.vaccinName" placeholder="Vaccin name">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input is-link" type="text" v-model="fields.price" placeholder="Price">
                    </div>
                </div>
                <div class="field" v-for="(alias, key) in fields.aliases" :key="'a' + key">
                    <div class="control">
                        <div class="level">
                            <input class="input is-link" type="text" v-model="alias.value" placeholder="Aliases">
                            <span class="icon has-text-link" @click="addAliasFields">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="field" v-for="(discount, key) in fields.discounts" :key="'d' + key">
                    <div class="level">
                        <div class="control">
                            <input class="input is-link" type="text" v-model="discount.name" placeholder="Discount name">
                        </div>
                        <div class="control">
                            <input class="input is-link" type="text" v-model="discount.value" placeholder="Discount value in percentage">
                        </div>
                        <span class="icon has-text-link" @click="addDiscountFields">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-link" @click="createNewVaccin">Create Vaccin</button>
                <button class="button is-link" @click="updateVaccin">Update Vaccin</button>
            </footer>
        </div>
    </div> 
</template>

<script>
export default {
    name: "NewVaccinComponent",
    props: ["isActive"],
    data(){
        return {
            fields: {
                vaccinName: "",
                price: "",
                discounts: [ { name: '', value: ''} ],
                aliases: [ { value: ''} ],
            },
        }
    },
    methods: {
        createNewVaccin(){
            let numOfVaccins = Seed.vaccins.length;
            Seed.vaccins.push({
                    vaccinId: ++numOfVaccins,
                    vaccinName: this.fields.Name,
                    price: this.fields.price,
                    aliases: this.fields.aliases,
                    discounts: this.fields.discounts,
            });
            
            this.$emit("close");
        },
        updateVaccin(){
            Seed.vaccins.map( vaccin => {
                if(vaccin.vaccinId == this.fields.vaccinId){
                    vaccin.vaccinName = this.fields.vaccinName;
                    vaccin.price = this.fields.price;
                    vaccin.aliases = this.fields.aliases;
                    vaccin.discounts = this.fields.discounts
                }
            });

            this.$emit("close");
        },
        populateVaccinModal(examData){
            this.fields = examData;
        },
        closeModal(){
            this.$emit("close");
        },
        addAliasFields(){
            this.aliases.push({ value: ''});
        },
        addDiscountFields(){
            this.discounts.push({ name: '', value: ''});
        },
    }
}
</script>