<template>
  <div>
    <p>Count: {{ myStore.count }}</p>
    <button @click="myStore.increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useMyStore } from "@/store/events";
import { fetchUsers } from "@/services/useApi";

const users = ref<string | null>(null);

const myStore = useMyStore();

onMounted(async () => {
  try {
    const data = await fetchUsers();
    console.log(data);
  } catch (e: any) {
    console.log("Error handling user: " + e.message);
  }
});
</script>
