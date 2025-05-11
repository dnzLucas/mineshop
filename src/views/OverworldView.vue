<script setup>
import Cards from '@/components/default/Cards.vue';
import overworldJson from "../overworld.json" // Ou outro arquivo JSON como nether.json ou end.json

</script>

<template>
<div class="container">
    <Cards :charactersRaw="overworldJson" /></div>
</template>

<style>
.container {
    background-color: #1a1a1a;
    height: 360vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
