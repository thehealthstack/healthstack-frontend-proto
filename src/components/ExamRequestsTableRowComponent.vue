<template>
    <tr>
        <td>{{ examRequest.examRequestId }}</td>
        <td>{{ examRequest.patient.firstName + " " + examRequest.patient.lastName }}</td>
        <td>{{ examRequest.patient.age }}</td>
        <td>{{ examRequest.patient.sex }}</td>
        <td>{{ examRequest.patient.email }}</td>
        <td>{{ examRequest.patient.telephone }}</td>
        <td>{{ examRequest.doctor.name }}</td>
        <td>{{ examRequest.status }}</td>
        <td>
            <select class="select">
                <option>Select Action</option>
                <option @click="callVerificationModal" v-show="session.user.role=='biologist'">Verify Results</option>
                <option>Specimen Collected</option>
                <option @click="callRegistrationModal">Register Results</option>
            </select>
        </td>
        <resultverification-component @close="closeVerificationModal" :isActive="isActiveVerification" :examRequest="examRequest"></resultverification-component>
        <resultregistration-component @closeregistration="closeRegistrationModal" :isActive="isActiveRegistration" :examRequest="examRequest"></resultregistration-component>
    </tr>
</template>

<script>
import resultVerificationComponent from "@/components/ResultVerificationComponent";
import resultRegisterationComponent from "@/components/ResultRegistrationComponent";

export default {
    name: "ExamRequestsTableRowComponent",
    props: ["examRequest", "session"],
    data(){
        return {
            isActiveVerification: false,
            isActiveRegistration: false,
        }
    },
    methods: {
        callVerificationModal(){
            this.isActiveVerification = true;
        },
        closeVerificationModal(){
            this.isActiveVerification = false;
        },
        closeRegistrationModal(){
            this.isActiveRegistration = false;
        },
        callRegistrationModal(){
            this.isActiveRegistration = true;
        }
    },
    components: {
        "resultverification-component": resultVerificationComponent,
        "resultregistration-component": resultRegisterationComponent,
    }
}
</script>