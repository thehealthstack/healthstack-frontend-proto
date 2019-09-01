<template>
    <table class="table">
        <tr>
            <th>Exam Request ID</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Doctor's Name</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
        <examrequesttablerow-component :session="session" :examRequest="examRequest" v-for="(examRequest, index) in examRequests" :key="index"></examrequesttablerow-component>
    </table>
</template>

<script>
import examRequestsTableRowComponent from "@/components/ExamRequestsTableRowComponent.vue";
import { getAllExamRequests, getCompleteExamReqeuestById } from "@/database/index.js";

export default {
    data(){
        return {
            examRequests: [],
            session: {}
        }
    },
    async created(){
        let availExamRequests = await getAllExamRequests();
        let examRequests = [];
        availExamRequests.map(async request => {
            let examRequest = await await getCompleteExamReqeuestById(request.examRequestId);
            examRequests.push(examRequest);
        })
        console.log(examRequests);
        this.examRequests = examRequests;
    },
    components: {
        "examrequesttablerow-component": examRequestsTableRowComponent,
    }
}
</script>