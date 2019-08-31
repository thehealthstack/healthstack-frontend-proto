<template>
  <tr>
    <td>{{ exam.examId }}</td>
    <td>{{ exam.examName }}</td>
    <td>{{ exam.aliases.map((alias) => alias.value).join(",") }}</td>
    <td>{{ exam.price }}</td>
    <td>{{ exam.discounts.map((discount) => discount.name).join(", ") }}</td>
    <td>
      <a class="button is-link is-rounded" @click="modifyExam(exam.examId)">Modify</a>
    </td>
    <newexam-component
      @close="closeNewExamModal"
      ref="newExamComponent"
      :isActive="isExamModalActive"
    ></newexam-component>
    <newvaccin-component
      @close="closeNewVaccinModal"
      ref="newVaccinComponent"
      :isActive="isVaccinModalActive"
    ></newvaccin-component>
  </tr>
</template>

<script>
import newExamComponent from "@/components/NewExamComponent.vue";
import newVaccinComponent from "@/components/NewVaccinComponent.vue";

export default {
  name: "ExamListingRowComponent",
  components: {
    "newexam-component": newExamComponent,
    "newvaccin-component": newVaccinComponent
  },
  props: ["exam"],
  data() {
    return {
      fields: {
        examName: "",
        price: "",
        examType: "",
        examDepartment: "",
        discounts: [],
        parameters: [],
        aliases: []
      },
      isExamModalActive: false,
      isVaccinModalActive: false
    };
  },
  methods: {
    modifyExam(examId) {
      let exam = Seed.exams.filter(exam => exam.examId == examId).shift();

      if (!exam.parameters) {
        this.$refs.newVaccinComponent.populateVaccinModal(exam);
        this.isVaccinModalActive = true;
      } else {
        this.$refs.newExamComponent.populateExamModal(exam);
        this.isExamModalActive = true;
      }
    },
    closeNewExamModal() {
      this.isExamModalActive = false;
    },
    closeNewVaccinModal() {
      this.isVaccinModalActive = false;
    }
  }
};
</script>