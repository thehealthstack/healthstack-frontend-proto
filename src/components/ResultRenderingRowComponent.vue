<template>
  <tr v-show="examRequest.status=='verified'">
    <td>{{ examRequest.examRequestId }}</td>
    <td>{{ examRequest.patient.firstName + " " + examRequest.patient.lastName }}</td>
    <td>{{ examRequest.patient.age }}</td>
    <td>{{ examRequest.patient.sex }}</td>
    <td>{{ examRequest.patient.email }}</td>
    <td>{{ examRequest.patient.telephone }}</td>
    <td>{{ examRequest.doctor.name }}</td>
    <td>{{ examRequest.status }}</td>
    <td>
      <a class="button is-link is-rounded" href="./../../../data/medicalresults.pdf">Render Result</a>
    </td>
  </tr>
</template>

<script>
export default {
    name: "ResultRenderingRowComponent",
    props: ["examRequest"]
}
</script>