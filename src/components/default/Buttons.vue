<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
    <button class="button">{{ text }}</button>
</template>

<style scoped>
@import "../../assets/scss/default/_buttons.scss"
</style>
