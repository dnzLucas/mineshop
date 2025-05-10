<script setup>
import Button from "./Buttons.vue"
import { ref, onMounted } from "vue"
import charactersRaw from "../../overworld.json"

const characters = ref([])

const cart = ref({})

onMounted(() => {
  characters.value = charactersRaw.map(character => {
    const image = new URL(`../../${character.image}`, import.meta.url).href
    const hover = new URL(`../../${character.hover}`, import.meta.url).href

    return {
      ...character,
      image,
      hover,
      currentImage: image
    }
  })

  const storedCart = JSON.parse(localStorage.getItem("cart"))
  if (storedCart) {
    cart.value = storedCart
  }
})


const onHover = (character) => {
  character.currentImage = character.hover
}

const onLeave = (character) => {
  character.currentImage = character.image
}

const addToCart = (character) => {
  const name = character.name
  const current = cart.value[name] || 0

  if (current >= 10) {
    alert("Limite máximo de 10 unidades por personagem.")
    return
  }

  cart.value[name] = current + 1
  localStorage.setItem("cart", JSON.stringify(cart.value))
}
</script>

<template>
<div class="card-container">
  <div class="characters">
    <div class="character" v-for="(character, index) in characters" :key="index">
      <div class="image-wrapper">
        <div class="image-shadow"></div>
        <div class="image">
          <img
            @mouseover="onHover(character)"
            @mouseleave="onLeave(character)"
            :src="character.currentImage"
            class="character-image"
            :alt="character.name"
          />
        </div>
      </div>
      <div class="character-content">
        <h2 class="name-character">{{ character.name }}</h2>
        <p class="description-character">{{ character.description }}</p>
      </div>
      <div class="cart">
        <Button :text="`Adicionar ao carrinho (${cart[character.name] || 0})`"
          class="button"
          :class="{ 'limit-reached': cart[character.name] >= 5 }"
          @click="addToCart(character)"
        >
        </Button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
@import "../../assets/scss/default/_cards.scss";
</style>
