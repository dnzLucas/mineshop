<script setup>
defineProps({
  toggle: Function,
  open: Boolean
})
</script>

<template>
    <div class="hamburger-alt" @click="toggle">
      <span class="bar" :class="{ open: open }"></span>
      <span class="bar" :class="{ open: open }"></span>
      <span class="bar" :class="{ open: open }"></span>
    </div>
  </template>

<style scoped>
@import "../../assets/scss/default/_hamburger-menu.scss";
</style>