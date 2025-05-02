<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from './components/default/HeaderComp.vue'
import FooterComp from './components/default/FooterComp.vue'
</script>

<template>
    <HeaderComp />
    <RouterView />
    <FooterComp />
</template>

<style>
@import "../src/assets/scss/style.scss";
</style>