<script setup>
import { ref, onMounted } from "vue";
import Buttons from "@/components/default/Buttons.vue";
import { RouterLink } from "vue-router";

const cart = ref({});

const clearCart = () => {
  localStorage.removeItem("cart");
  cart.value = {};
};

const decreaseQuantity = (name) => {
  if (cart.value[name] && cart.value[name].quantity > 1) {
    cart.value[name].quantity--;
  } else {
    delete cart.value[name]; // Remove se for o último
  }
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

const increaseQuantity = (name) => {
  if (cart.value[name] && cart.value[name].quantity < 10) {
    cart.value[name].quantity++;
  } else {
    alert("Limite máximo de 10 unidades por personagem.");
  }
};

onMounted(() => {
  const storedCart = JSON.parse(localStorage.getItem("cart"));
  if (storedCart) {
    cart.value = storedCart;
  }
});
</script>
<template>
  <div class="cart-container">
    <h1>Carrinho de Compras</h1>

    <Buttons @click="clearCart" class="button" text="Limpar Carrinho"></Buttons>
    <div class="cart-summary">
      <div v-if="Object.keys(cart).length === 0">
        <p>Seu carrinho está vazio!</p>
      </div>
      <div class="cards-area" v-else>
        <div v-for="(item, name) in cart" :key="name" class="cart-item">
          <img :src="item.image" :alt="name" class="cart-image" />
          <h2>{{ name }}</h2>
            <div class="quantity-info">
                <Buttons
              text="-"
              class="remove-button"
              @click="decreaseQuantity(name)"
          />
          <p>Quantidade: {{ item.quantity }}</p>
            <Buttons
                text="+"
                class="add-button"
                @click="increaseQuantity(name)"
            />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/scss/cart/_cart.scss";
</style>
