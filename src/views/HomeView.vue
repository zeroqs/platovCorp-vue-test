<script setup lang="ts">
import BaseLayout from '@/shared/ui/BaseLayout/BaseLayout.vue'
import ProductCard from '@/shared/ui/ProductCard/ProductCard.vue'
import LogoBucket from '@/shared/icons/LogoBucket.vue'
import { type Product, useProduct } from '@/shared/composables/useProducts'
import { ref } from 'vue'
import { useBucketStore } from '@/stores/bucket'
import NotificationMessage from '@/shared/ui/NotificationMessage.vue'

const pagination = ref(0)
const { products, isLoading } = useProduct(pagination)
const store = useBucketStore()

const isVisible = ref(false)
const message = ref('')

const showNotification = () => {
  message.value = 'Вы успешно добавили товар в корзину'
  isVisible.value = true

  setTimeout(() => {
    isVisible.value = false
  }, 1000)
}

const addProduct = (product: Product) => {
  store.addToBucket(product)
  showNotification()
}
</script>

<template>
  <BaseLayout>
    <template #content>
      <template v-for="item in products" :key="item.id">
        <ProductCard :img-src="item.images[0]">
          <template #title>{{ item.title }}</template>
          <template #description>{{ item.description }}</template>
          <template #price>{{ item.price }} $</template>
          <template #action>
            <button @click="addProduct(item)">
              <LogoBucket />
            </button>
          </template>
        </ProductCard>
      </template>
      <template v-if="isLoading">loading</template>
    </template>
    <template #footer>
      <button @click="pagination += 4" class="buttonMore">Показать еще</button>
    </template>
  </BaseLayout>
  <NotificationMessage :isVisible="isVisible" :message="message" />
</template>

<style scoped>
.buttonMore {
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-in-out;
}

.buttonMore:hover {
  transform: scale(1.05);
}
</style>