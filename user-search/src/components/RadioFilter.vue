<script setup lang="ts">
import { defineEmits } from "vue";
import { useMyStore } from "@/store/events";
const store = useMyStore();

const emit = defineEmits(["filter"]);

const filter = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  if (inputElement) {
    emit("filter", inputElement.value);
  }
};
</script>

<template>
  <div class="flex my-4 mr-4 flex-wrap items-center">
    <label for="male" class="text-sm font-medium text-gray-900 mr-1 block"
      >Male</label
    >
    <input
      type="radio"
      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300 mr-2"
      name="gender"
      id="male"
      value="male"
      :checked="store.filters.gender === 'male'"
      @change="filter"
    />

    <label for="female" class="text-sm font-medium text-gray-900 mr-1 block"
      >Female</label
    >
    <input
      type="radio"
      name="gender"
      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
      id="female"
      value="female"
      :checked="store.filters.gender === 'female'"
      @change="filter"
    />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/styles.scss";
</style>
