<template>
    <div class="level">
        <div class="level-left">
            <span>{{ parameter.name }}</span>
            <input class="input" type="text" placeholder="Value" v-model="parameter.value">
            <span>{{ parameter.unit }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExamParameterComponent",
    props: ["parameter"],
}
</script>