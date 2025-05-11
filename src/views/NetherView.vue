<script setup>
import Cards from '@/components/default/Cards.vue';
import netherJson from "../nether.json" // Ou outro arquivo JSON como nether.json ou end.json

</script>

<template>
<div class="nether-container">
    <div class="nether-banner">
        <h1>Nether</h1>
    </div>
    <Cards :charactersRaw="netherJson" /></div>
</template>

<style>
.nether-container {
    background-color: #1a1a1a;
    height: 360vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nether-banner{
    background-image: url(../assets/images/banners/nether.png);
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
