<template>
  <div class="box">
    <h1 class="title">{{ result.examName }}</h1>
    <h2 class="subtitle">{{ result.department }}</h2>
    <div v-for="(parameter, key) in result.parameters" :key="key">
      <span>{{ parameter.name }}</span> :
      <span>{{ parameter.value }} {{ parameter.unit }}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: "ExamResultComponent",
    props: ["result"]
}
</script>