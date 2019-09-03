<template>
    <table class="table">
        <tr>
            <th>Exam/Vaccin ID</th>
            <th>Name</th>
            <th>Aliases</th>
            <th>Price</th>
            <th>Discounts</th>
            <th>Action</th>
        </tr>
        <examlistingrow-component :exam="exam" v-for="(exam, index) in exams" :key="index"></examlistingrow-component>
    </table>
</template>

<script>
import examListingRowComponent from "@/components/ExamListingRowComponent.vue";
import { getAllExams } from "@/database/index.js";
export default {
    name: "ExamListingTableComponent",
    data(){
        return {
            exams: [],
        }
    },
    async created(){
        this.exams = await getAllExams();
    },
    components: {
        "examlistingrow-component": examListingRowComponent,
    }
}
</script>