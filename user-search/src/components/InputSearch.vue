<script setup lang="ts">
import { ref, defineEmits, watchEffect } from "vue";
import debounce from "lodash/debounce";
import { useMyStore } from "@/store/events";

const store = useMyStore();

const searchQuery = ref("");

const emit = defineEmits(["search"]);

watchEffect(() => {
  searchQuery.value = store.filters.search;
});

const handleInput = debounce(() => {
  emit("search", searchQuery.value);
}, 300);
</script>

<template>
  <div>
    <input
      type="text"
      id="default-input"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Search"
      onfocus="this.placeholder=''"
      onblur="this.placeholder='Type'"
      v-model="searchQuery"
      @input="handleInput"
    />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/styles.scss";
</style>
