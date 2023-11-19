<template>
  <input
    type="text"
    @input="handleInput"
    class="input"
    placeholder="Search"
    onfocus="this.placeholder=''"
    onblur="this.placeholder='Type'"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { filterEvents } from "@/utils/eventUtils";

const inputValue = ref("Search");

const handleInput = (event: any) => {
  inputValue.value = event.target.value;

  // filterEvents(inputValue.value);
};
</script>

<style scoped lang="scss">
@import "@/scss/styles.scss";
</style>
