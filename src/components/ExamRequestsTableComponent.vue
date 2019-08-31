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

export default {
    data(){
        return {
            examRequests: Seed.examRequests,
            session: Seed.session
        }
    },
    components: {
        "examrequesttablerow-component": examRequestsTableRowComponent,
    }
}
</script>