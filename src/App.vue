<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import HeaderComp from './components/default/HeaderComp.vue'
import FooterComp from './components/default/FooterComp.vue'
const route = useRoute()
const isHome = computed(() => route.path === '/')
const layoutRoutes = ['/overworld', '/nether', '/end', '/cart']

const showLayout = computed(() => layoutRoutes.includes(route.path))
</script>

<template>
    <HeaderComp v-if="showLayout"/>
    <RouterView />
    <FooterComp v-if="showLayout"/>
</template>

<style>
@import "../src/assets/scss/style.scss";
</style>