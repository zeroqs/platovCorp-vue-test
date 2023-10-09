<script setup lang="ts">
import type { Ref } from 'vue'

defineProps<{
  isVisible: Ref<boolean>
  message: string
}>()
</script>

<template>
  <transition name="slide-fade">
    <div v-if="isVisible" class="notification">{{ message }}</div>
  </transition>
</template>

<style scoped>
.notification {
  position: fixed;
  width: 350px;
  border-radius: 20px;
  top: 10px;
  left: 0;
  margin: 0 auto;
  right: 0;
  padding: 16px;
  background-color: rgba(40, 255, 25, 0.8);
  text-align: center;
  font-size: 16px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>