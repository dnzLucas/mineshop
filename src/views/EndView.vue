<script setup>
import Cards from '@/components/default/Cards.vue';
import endJson from "../end.json" // Ou outro arquivo JSON como nether.json ou end.json

</script>

<template>
<div class="end-container">
    <div class="end-banner">
        <h1>The End</h1>
    </div>
    <Cards :charactersRaw="endJson" /></div>
</template>

<style>
.end-container {
    background-color: #1a1a1a;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.end-banner{
    background-image: url(../assets/images/banners/end.png);
    background-size: cover;
    background-position: center;
    padding: 20px 20px 40px 20px;
    color: white;
    text-shadow:
    1px 1px 0 #000000;
    width: 100%;
    text-align: center;
}

</style>
