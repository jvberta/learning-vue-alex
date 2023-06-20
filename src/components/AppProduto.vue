<template>
  <div class="produto">
    <div class="nome">
      <div>{{ nome }}</div>
      <img class="imagem" src="https://guiademarketing.com.br/wp-content/uploads/2017/04/produtos.jpg"/>
    </div>
    <div class="detalhes">
        <div>Preco: {{ precoFormatado }}</div>
        <div>Marca: {{ marca }}</div>
        <div>Frete: {{ freteFormatado }}</div>
        
        <v-btn @click="adicionarCarrinho" color="primary">Add. Carrinho</v-btn>
    </div>
  </div>   
</template>
<script setup>

import { defineEmits, computed } from 'vue'

const emit = defineEmits(['add-carrinho'])

const props = defineProps({
  nome: String,
  preco: Number,
  marca: String,
  frete: Number
})

function formataNumero(numero) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    numero,
  )
}

const freteFormatado = computed(() => formataNumero(props.frete))
const precoFormatado = computed(() => formataNumero(props.preco))


function adicionarCarrinho() {
  emit('add-carrinho', props)
}

</script>
<style lang="css">
.produto {
  display: block;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 10px rgba(0,0,0,.1);
}

.nome {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
}

.imagem {
  width: 150px;
}
</style>