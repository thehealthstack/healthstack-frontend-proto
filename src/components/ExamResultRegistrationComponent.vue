<template>
    <div class="box">
        <h1 class="title">{{ exam.examName }}</h1>
        <h2 class="subtitle">{{ exam.department }}</h2>
        <examparameter-component :parameter="parameter" v-for="(parameter, key) in exam.parameters" :key="key"></examparameter-component>
     </div>
</template>

<script>
import examParameterComponent from "@/components/ExamParameterComponent.vue";

export default {
    name: "ExamResultRegistrationComponent",
    components: {
        "examparameter-component": examParameterComponent,
    },
    props: ["exam"]
}
</script>