<script setup>
import Button from "./Buttons.vue"
</script>
<template>
  <div class="characters">
    <div class="character">
      <div class="image-wrapper">
        <div class="image-shadow"></div>
        <div class="image">
          <img
            class="character-image"
            alt=""
          />
        </div>
      </div>
      <div class="character-content">
        <h2 class="name-character">teste</h2>
        <p class="description-character">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate veniam, dolores mollitia rem obcaecati at quasi natus explicabo qui error vitae assumenda temporibus voluptatem repellat odio deleniti repellendus corporis impedit!</p>
      </div>
      <Button text="Adicionar ao carrinho"/>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/scss/default/_cards.scss";
</style>
