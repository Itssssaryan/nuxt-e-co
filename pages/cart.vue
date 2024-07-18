<template>
    <div> 
        <section>
            <v-container>
             <h1 class="text-center">Carts</h1>   
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
            Product
        </th>
        <th class="text-left">
          Qty
        </th>
        <th class="text-left">
          Price
        </th>
        <th class="text-left text-center">
          Image
        </th>
         <th>
            Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="cart in cartStore.carts"
        :key="cart"
      >
        <td>{{ cart.product }}</td>
        <td>{{ cart.qty }}</td>
         <td>{{ cart.price }}</td>
         <td><v-img :src="cart.image" height="100"></v-img></td>
         <td >
            <v-btn @click="cartStore.deleteCart(cart.id)">
                Delete
            </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
            </v-container>
        </section>
    </div>
</template>

<script setup>
import {useCartStore} from "~/stores/cart";
const cartStore = useCartStore();
</script>

<style  scoped>

</style>