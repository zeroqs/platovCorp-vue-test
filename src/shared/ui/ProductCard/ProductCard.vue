<script setup lang="ts">
defineProps<{
  imgSrc: string
}>()
</script>

<template>
  <div class="card">
    <header class="header">
      <img :src="imgSrc" alt="" />
    </header>
    <div class="main">
      <main class="content">
        <h1 class="title">
          <slot name="title"></slot>
        </h1>
        <span class="description"> <slot name="description"></slot></span>
      </main>
      <footer class="footer">
        <span class="price"><slot name="price"></slot></span>
        <slot name="action"></slot>
      </footer>
    </div>
  </div>
</template>

<style>
.card {
  max-width: 280px;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  height: fit-content;
}

.main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 60%;
}

.header {
  display: flex;
  justify-content: center;
}

.header img {
  height: 150px;
  border-radius: 10px 10px 0px 0px;
  max-width: 280px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex: 1 1 auto;
}

.title {
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.description {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  opacity: 0.5;
}

.price {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
}
</style>
