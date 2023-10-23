<template>
    <div>
        <h1>Home</h1>
        <p>{{ userStore.userData?.email }}</p>

        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese url" v-model="url">
            <button type="submit">Agregar</button>
        </form>

        <p v-if="databaseStore.loadingDoc">Loadind docs...</p>
        <ul v-else>
            <li v-for="item of databaseStore.documents" :key='item.id'>
                {{item.name}} <br> {{ item.id }} <br> {{ item.short }}
            </li>
        </ul>
    </div>
</template>


<script setup>
    import { useUserStore } from "../stores/user";
    import { useDatabaseStore } from "../stores/database";
    import { ref } from "vue";

    const userStore = useUserStore();
    const databaseStore = useDatabaseStore();
    
    databaseStore.getUrls() 

    const url = ref('')

    const handleSubmit = () => {
      
    }

</script>