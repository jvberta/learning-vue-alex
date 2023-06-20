<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <div class="lista-produtos">
          <div v-if="produtos.length === 0">
            Carregando ...
          </div>
        
          <AppProduto
            v-else
            v-for="produto in produtos" 
            :key="produto.nome" 
            :nome="produto.nome"
            :preco="produto.preco"
            :marca="produto.marca"
            :frete="produto.frete"
            @add-carrinho="onAddCarrinho" />
        </div>
      </v-col>
      <v-col cols="4">
        
        <CarrinhoCompras :produtos="produtosCarrinho">
        </CarrinhoCompras>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AppProduto from '@/components/AppProduto.vue'
import CarrinhoCompras from '@/components/CarrinhoCompras.vue'
import { ref } from 'vue'

const produtos = ref([])
const produtosCarrinho = ref([])

setTimeout(function () {
  produtos.value.push({
  nome: "Produto Teste 1",
  preco: 100.0,
  marca: "Marca 1",
  frete: 20.0
},{
  nome: "Produto Teste 2",
  preco: 23.4,
  marca: "Marca 2",
  frete: 5.5
  },{
  nome: "Produto Teste 3",
  preco: 200.0,
  marca: "Marca 1",
  frete: 20.0
})
}, 5000)

function onAddCarrinho(produto) {
  produtosCarrinho.value.push(produto)
}
</script>
<style lang="css">

.lista-produtos {
 display: flex;
 justify-content: start;
 align-items: center;
}

</style>