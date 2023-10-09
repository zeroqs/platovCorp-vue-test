<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LogoIcon from '@/shared/icons/LogoIcon.vue'
import NavigateLinks from '@/shared/ui/NavigateLinks/NavigateLinks.vue'
</script>

<template>
  <div class="container">
    <header class="header">
      <slot name="header">
        <LogoIcon />
        <NavigateLinks>
          <RouterLink to="/">Главная</RouterLink>
          <RouterLink to="/about">Корзина</RouterLink>
        </NavigateLinks>
      </slot>
    </header>
    <main class="content">
      <slot name="content"></slot>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

.footer {
  align-self: flex-end;
  padding: 20px;
}

.content {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

@media (width <= 700px) {
  .content {
    align-self: center;
  }
}
</style>