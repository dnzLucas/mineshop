<script setup>
import Cards from '@/components/default/Cards.vue';
import overworldJson from "../overworld.json" // Ou outro arquivo JSON como nether.json ou end.json

</script>

<template>
<div class="overworld-container">
    <div class="overworld-banner">
        <h1>Overworld</h1>
    </div>
    <Cards :charactersRaw="overworldJson" /></div>
</template>

<style>
.overworld-container {
    background-color: #1a1a1a;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 10px 0 0 0;
}

.overworld-banner{
    background-image: url(https://minecraft.wiki/images/thumb/Overworld_1.18.png/1200px-Overworld_1.18.png?9499d);
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
