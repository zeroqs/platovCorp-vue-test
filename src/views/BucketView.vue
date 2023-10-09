<script setup lang="ts">
import BaseLayout from '@/shared/ui/BaseLayout/BaseLayout.vue'
import { useBucketStore } from '@/stores/bucket'
import ProductCard from '@/shared/ui/ProductCard/ProductCard.vue'

const store = useBucketStore()
</script>

<template>
  <BaseLayout>
    <template #content>
      <template v-if="store.bucket.length === 0">
        <h1>Корзина пуста 🛒</h1>
      </template>
      <template v-for="item in store.bucket" :key="item.id">
        <ProductCard :img-src="item.images[0]">
          <template #title>{{ item.title }}</template>
          <template #description>{{ item.description }}</template>
          <template #price>{{ item.price }} $</template>
          <template #action>
            <button class="delete" @click="store.deleteFromBucket(item)">Удалить</button>
          </template>
        </ProductCard>
      </template>
    </template>
  </BaseLayout>
</template>

<style scoped>
.delete {
  color: white;
  padding: 10px;
  background-color: rgba(220, 34, 34, 0.8);
  border-radius: 10px;
}
</style>