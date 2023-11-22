<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["filter"]);

const filter = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  if (inputElement) {
    emit("filter", inputElement.value);
  }
};
</script>

<template>
  <div>
    <label for="male">Male</label>
    <input type="radio" name="gender" id="male" value="male" @change="filter" />
    <label for="female">Female</label>
    <input
      type="radio"
      name="gender"
      id="female"
      value="female"
      @change="filter"
    />
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/styles.scss";
</style>
