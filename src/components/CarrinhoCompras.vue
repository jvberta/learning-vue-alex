<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1>Carrinho de Compras</h1>
      </v-col>
      <v-col v-for="produto in store.produtosCarrinho" :key="produto.nome" cols="12">
        <v-card>
          <v-card-title>
            {{ produto.nome }}
          </v-card-title>
          <v-row>
            <v-col cols="12">
              Preco: {{ produto.preco }}
            </v-col>
            <v-col cols="12">
              frete: {{ produto.frete }}
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="12">
          Preco Produtos: {{ precoProdutos }}
        </v-col>
        <v-col cols="12">
          Frete: {{ precoFrete }}
        </v-col>
        <v-col cols="12">
          Valor Total: {{ precoTotal }}
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { produtosAppStore } from '@/store/app'

const store = produtosAppStore()

// const props = defineProps({
//   produtos: Array,
// })

const precoProdutos = computed(() => {
  return store.produtosCarrinho.reduce((total, produtoAtual) => total + produtoAtual.preco, 0)
})

const precoFrete = computed(() => {
  return store.produtosCarrinho.reduce((total, produtoAtual) => total + produtoAtual.frete, 0)
})

const precoTotal = computed(() => precoProdutos.value + precoFrete.value)


</script>
<style lang="css">


</style>