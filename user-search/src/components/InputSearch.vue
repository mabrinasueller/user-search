<script setup lang="ts">
import { ref, defineEmits } from "vue";
import debounce from "lodash/debounce";

const searchQuery = ref("");

const emit = defineEmits(["search"]);

const handleInput = debounce(() => {
  emit("search", searchQuery.value);
}, 300);
</script>

<template>
  <div>
    <input
      type="text"
      class="input"
      placeholder="Search"
      onfocus="this.placeholder=''"
      onblur="this.placeholder='Type'"
      v-model="searchQuery"
      @input="handleInput"
    />
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/styles.scss";
</style>
