<template>
  <div class="w-full mt-5 items-center">
    <div class="w-full h-24 mb-[-30px] text-start text-black text-4xl">
      <p>Drinks</p>
    </div>
    <div class="w-full mb-5">
      <div class="w-full h-8 text-3xl mb-7 text-start align-middle">
        <p>Coffe</p>
      </div>
      <div class="w-full mb-5 flex flex-col md:flex-row lg:flex-row justify-between">
        <Menu title="Espresso" description="A shot of rich, concentrated coffee" price="3.00"/>
        <Menu title="Americano" description="Espresso diluted with hot water." price="4.00"/>
        <Menu title="Latte" description="Espresso with steamed milk and a light layer of foam." price="6.00"/>
      </div>
      <div class="w-full flex flex-col md:flex-row lg:flex-row justify-between">
        <Menu title="Cappuccino" description="Equal parts espresso, steamed milk, and foam." price="6.00"/>
        <Menu title="Macchiato" description="Espresso 'marked' with a dollop of foam or milk. " price="6.00"/>
        <Menu title="Flat White" description="Espresso with steamed milk, less frothy than a latte." price="8.00"/>
      </div>

    </div>
  </div>
  <div class="w-full mt-5 items-center">
    <div class="w-full">
      <div class="w-full h-8 mb-7 text-2xl text-start align-middle">
        <p>Specialty Drinks</p>
      </div>
      <div class="w-full flex flex-col md:flex-row lg:flex-row justify-between mt-2">
        <Menu title="Chai Latte"
              description="Spiced tea mixed with steamed milk."
              price="12.00"/>
        <Menu title="Matcha Latte"
              description="Finely ground green tea powder mixed with milk."
              price="12.00"/>
        <Menu title="Golden Latte"
              description="A blend of turmeric, spices, and steamed milk."
              price="14.00"/>
      </div>
    </div>
  </div>
</template>

<script setup>

import Menu from "@/components/Orders/OrderMenu.vue";

</script>

<style scoped>

</style>