<template>
    <div class="box">
        <span>Patient Name: {{ examRequest.patient.firstName + ", " + examRequest.patient.lastName }}, </span>
        <span>Patient Age: {{ examRequest.patient.age }}, </span>
        <span>Patient Sex: {{ examRequest.patient.sex }}, </span>
        <span>Patient Telephone: {{ examRequest.patient.telephone }}, </span>
        <span>Patient Email: {{ examRequest.patient.email }}, </span>
        <span>Doctor's Name: {{ examRequest.doctor.name }}</span>
    </div>
</template>

<script>
export default {
    name: "PatientInfoComponent",
    props: ["examRequest"],
    
}
</script>