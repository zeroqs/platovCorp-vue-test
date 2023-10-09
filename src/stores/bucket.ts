import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/shared/composables/useProducts'

export const useBucketStore = defineStore('bucket', () => {
  const bucket: Ref<Product[]> = ref([])

  const addToBucket = (product: Product) => {
    bucket.value.push(product)
  }

  const deleteFromBucket = (product: Product) => {
    bucket.value.splice(bucket.value.indexOf(product), 1)
  }

  return { bucket, addToBucket, deleteFromBucket }
})
