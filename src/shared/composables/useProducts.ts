import type { Ref } from 'vue'
import { ref, watch } from 'vue'

export interface Product {
  id: number
  title: string
  description: string
  price: number
  rating: number
  images: string[]
}

export const useProduct = (paginationValue: Ref<number>) => {
  const products: Ref<Product[]> = ref([])
  const isLoading = ref(false)

  const loadProducts = async () => {
    isLoading.value = true
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=4&skip=${paginationValue.value}`
      )
      const data = await response.json()
      products.value = [...products.value, ...data.products]
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }
  loadProducts()
  watch(paginationValue, loadProducts)

  return {
    products,
    isLoading
  }
}
