<script setup>
const props = defineProps({
  planName: { type: String, default: "The Default Plan", required: true },
});
</script>

<template>
  <div class="plan">
    <div class="description">
      <span class="title">{{ planName }}</span>
    </div>
  </div>
</template>
