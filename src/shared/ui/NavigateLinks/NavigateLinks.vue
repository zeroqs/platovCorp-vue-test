<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <slot />
    </ul>
  </nav>
</template>

<style scoped>
.nav {
}

.nav-list {
  display: flex;
  gap: 30px;
}
</style>
