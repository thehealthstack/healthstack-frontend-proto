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
      <select class="select" @change="callAction" v-model="selection">
        <option>Select Action</option>
        <option>Verify Results</option>
        <option>Specimen Collected</option>
        <option>Register Results</option>
      </select>
    </td>
    <resultverification-component
      @close="closeVerificationModal"
      :isActive="isActiveVerification"
      :examRequest="examRequest"
    ></resultverification-component>
    <resultregistration-component
      @closeregistration="closeRegistrationModal"
      :isActive="isActiveRegistration"
      :examRequest="examRequest"
    ></resultregistration-component>
  </tr>
</template>

<script>
import resultVerificationComponent from "@/components/ResultVerificationComponent";
import resultRegisterationComponent from "@/components/ResultRegistrationComponent";
import { editExamRequestById } from "@/database/index.js";

export default {
    name: "ExamRequestsTableRowComponent",
    props: ["examRequest", "session"],
    data(){
        return {
            selection: "Select Action",
            isActiveVerification: false,
            isActiveRegistration: false,
        }
    },
    methods: {
        async callAction(){
            if(this.selection == "Verify Results"){
                this.isActiveVerification = true;
            }

            if(this.selection == "Register Results"){
                this.isActiveRegistration = true;
            }

            if(this.selection == "Specimen Collected"){
                this.examRequest.status = "Specimen Collected";
                try{
                    let examRequest = await editExamRequestById(this.examRequest);
                } catch(err){
                    console.error(err);
                }
            }
            
        },
        closeVerificationModal(){
            this.isActiveVerification = false;
        },
        closeRegistrationModal(){
            this.isActiveRegistration = false;
        },
    },
    components: {
        "resultverification-component": resultVerificationComponent,
        "resultregistration-component": resultRegisterationComponent,
    }
}
</script>