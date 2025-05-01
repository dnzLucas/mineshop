<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from './components/default/HeaderComp.vue'
</script>

<template>
    <HeaderComp />

  <RouterView />
</template>

<style>
@import "../src/assets/scss/style.scss";
</style>