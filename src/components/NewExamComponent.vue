<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create / Update Exam</p>
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
            <select v-model="fields.department" >
              <option :selected="department == fields.department" v-for="(department, key) in examDepartments" :key="key">{{ department }}</option>
            </select>
          </div>
        </div>
        <div class="field" v-for="(alias, key) in fields.aliases" :key="'A' + key">
          <div class="control">
            <div class="level">
              <input class="input is-link" type="text" v-model="alias.value" placeholder="Aliases" />
              <span class="icon has-text-link" @click="addAliasFields">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="field" v-for="(discount, key) in fields.discounts" :key="'D' + key">
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
        <div class="field" v-for="(parameter, key) in fields.parameters" :key="'P' + key">
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
        <button class="button is-link" @click="updateExam">Update Exam</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { createExam, editExamById } from "@/database/index.js";

export default {
  name: "NewExamComponent",
  props: ["isActive"],
  data() {
    return {
      examDepartments: ["parasitology", "virology", "hematology"],
      fields: {
        examName: "",
        price: "",
        examType: "",
        examDepartment: "",
        discounts: [{ name: "", value: "" }],
        parameters: [{ name: "", unit: "", computed: "" }],
        aliases: [{ value: "" }]
      }
    };
  },
  methods: {
    async createNewExam() {
      let exam = await createExam({
          examName: this.fields.examName,
          department: this.fields.department,
          price: this.fields.price,
          aliases: this.fields.aliases,
          discounts: this.fields.discounts,
          parameters: this.fields.parameters
      });
      this.$emit("close");
    },
    updateExam(){
      console.log(this.fields);
      let exam = editExamById({
            examId: this.fields.examId,
            examName: this.fields.examName,
            department: this.fields.department,
            price: this.fields.price,
            aliases: this.fields.aliases,
            discount: this.fields.discounts,
            parameters: this.fields.parameters,
      }).then((exam) => {
        console.log(exam);
      }).catch(err => {
        console.log(err);
      })
      this.$emit("close");
    },
    populateExamModal(examData) {
      this.fields = examData;
    },
    closeModal() {
      this.$emit("close");
    },
    addAliasFields() {
      this.aliases.push({ value: "" });
    },
    addDiscountFields() {
      this.discounts.push({ name: "", value: "" });
    },
    addParameterFields() {
      this.parameters.push({ name: "", unit: "", computed: "" });
    }
  }
};
</script>