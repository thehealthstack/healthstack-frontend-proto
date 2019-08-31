<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create New Exam</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <div class="control">
            <input
              class="input is-link"
              type="text"
              v-model="fields.examName"
              placeholder="Exam or vaccin name"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input is-link" type="text" v-model="fields.price" placeholder="Price" />
          </div>
        </div>
        <div class="field">
          <div class="control select">
            <select v-model="fields.examDepartment">
              <option>Parasitology</option>
              <option>Hematology</option>
              <option>Virology</option>
            </select>
          </div>
        </div>
        <div class="field" v-for="(alias, key) in fields.aliases" :key="key">
          <div class="control">
            <div class="level">
              <input class="input is-link" type="text" v-model="alias.value" placeholder="Aliases" />
              <span class="icon has-text-link" @click="addAliasFields">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="field" v-for="(discount, key) in fields.discounts" :key="key">
          <div class="level">
            <div class="control">
              <input
                class="input is-link"
                type="text"
                v-model="discount.name"
                placeholder="Discount name"
              />
            </div>
            <div class="control">
              <input
                class="input is-link"
                type="text"
                v-model="discount.value"
                placeholder="Discount value in percentage"
              />
            </div>
            <span class="icon has-text-link" @click="addDiscountFields">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div class="field" v-for="(parameter, key) in fields.parameters" :key="key">
          <div class="level">
            <div class="control">
              <input
                class="input is-link"
                type="text"
                v-model="parameter.name"
                placeholder="Exam Parameter"
              />
            </div>
            <div class="control">
              <input
                class="input is-link"
                type="text"
                v-model="parameter.unit"
                placeholder="Parameter Unit"
              />
            </div>
            <div class="control">
              <input
                class="input is-link"
                type="text"
                v-model="parameter.formula"
                placeholder="Parameter Formula"
              />
            </div>
            <span class="icon has-text-link" @click="addParameterFields">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-link" @click="createNewExam">Create Exam</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    name: "NewExamComponent",
    props: ["isActive"],
    data(){
        return {
            fields: {
                examName: "",
                price: "",
                examType: "",
                examDepartment: "",
                discounts: [ { name: '', value: ''} ],
                parameters: [ { name: '', unit: '', computed: ''} ],
                aliases: [ { value: ''} ],
            },
        }
    },
    methods: {
        createNewExam(){
            let numOfExams = Seed.exams.length;
            Seed.exams.push({
                examId: ++numOfExams,
                examName: this.fields.examName,
                department: this.fields.department,
                price: this.fields.price,
                aliases: this.fields.aliases,
                discounts: this.fields.discounts,
                parameters: this.fields.parameters,
            });
            this.$emit("close");
        },
        populateExamModal(examData){
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
        addParameterFields(){
            this.parameters.push({ name: '', unit: '', computed: ''});
        }
    }
}
</script>