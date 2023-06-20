// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const produtosAppStore = defineStore('produtos', () => {
  const produtos = ref([])
  const produtosCarrinho = ref([])

  return { produtos, produtosCarrinho }
})
