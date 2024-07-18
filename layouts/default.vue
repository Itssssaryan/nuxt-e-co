<template>
    <div>
        <v-app>
            <header>
                <navbar/>
            </header>

            <main>
                <slot />
            </main>

            <footer>

            </footer>
        </v-app>
    </div>
</template>

<script setup>
import{useAuthStore} from "~/stores/auth";
const authStore = useAuthStore();
authStore.getToken();


import {useCartStore} from "~/stores/cart";
const cartStore = useCartStore();
await cartStore.fetchCarts();
</script>

<style  scoped>

</style>