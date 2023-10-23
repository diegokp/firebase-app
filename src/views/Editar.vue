<template>

    <div>
        <h1>Editar id: route.params</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese url" v-model="url">
            <button type="submit">Actualizar</button>
        </form>
    </div>

</template>

<script setup> 
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDatabaseStore } from '../stores/database';

const databaseStore = useDatabaseStore()

const route = useRoute();
// console.log(route.params);


const handleSubmit = () => {
      console.log('editar')
    }

const url = ref('')

onMounted (async() => {
  url.value = await databaseStore.leerUrl(route.params.id)
})

</script>