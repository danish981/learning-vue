<script setup>
import { ref } from "vue";
import CoffeePlan from "./CoffeePlan.vue";
const plans = ref(["The Single", "The Curious", "The Addict", "The Hacker"]);
</script>

<template>
  <!-- PARENT COMPONENT -->

  <div class="plans">
    <CoffeePlan v-for="plan in plans" :key="plan" :planName="plan" />
  </div>
</template>
