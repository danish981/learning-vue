<script setup>
import { ref } from "vue";

const selected = ref(false);

const props = defineProps({
  planName: { type: String, default: "The Default Plan", required: true },
});
</script>

<template>
  <!-- CHILD COMPONENT -->
  <div class="plan" :class="{ 'active-plan': selected }">
    <div class="description">
      <span class="title">{{ planName }}</span>
    </div>
  </div>
</template>
