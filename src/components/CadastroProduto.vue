<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">

        <h1>Criar Produto</h1>
      </v-col>
      <v-col cols="12">
        <v-form @submit.prevent="onCriarProduto" v-model="formValido" ref="form">
           <v-text-field label="Nome do Produto" v-model="dadosProduto.nome" :rules="validacaoNome"/>
           <v-text-field label="Preco" type="number" v-model="dadosProduto.preco"/>
           <v-text-field label="Marca" v-model="dadosProduto.marca"/>
           <v-text-field label="Frete" type="number" v-model="dadosProduto.frete"/>
           <v-btn type="submit" :disabled="!formValido">Criar</v-btn>
           <v-btn @click="onLimpar">Limpar</v-btn>
        </v-form>
      </v-col>
      {{ dadosProduto.nome }}
      {{ dadosProduto.preco }}
      {{ dadosProduto.marca }}
      {{ dadosProduto.frete }}
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, defineEmits } from 'vue'
import { produtosAppStore } from '@/store/app'

const store = produtosAppStore()

const emit = defineEmits(['add-produto'])

const form = ref(null)

const dadosProduto = ref({
  nome: '',
  preco: '',
  marca: '',
  frete: ''
})

const formValido = ref(false)

const validacaoNome = ref([
  (nome) => !!nome || 'Nome deve ser preenchido',
  (nome) => nome.length >= 5 || 'Nome deve ter pelo menos 5 caracteres'
])

function onCriarProduto() {
  const { nome, preco, marca, frete } = dadosProduto.value
  
  if (nome && preco && marca && frete) {

    store.produtos.push(dadosProduto.value)
    emit('add-produto', dadosProduto.value)

  }

}

function onLimpar() {
  form.value.reset()
}

</script>