<template>
  <div ref="scrollContainer">
    <slot></slot>
    <div v-if="loading">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { useInfiniteScroll } from "@vueuse/core";
import { useMyStore } from "@/store/events";
import debounce from "lodash/debounce";

const scrollContainer = ref(null);
const loading = ref(false);
const store = useMyStore();

const emit = defineEmits(["loadMore"]);

const debouncedLoadMore = debounce(async () => {
  if (store.filters.gender !== "all" || store.filters.search !== "") return;
  if (store.filters.gender !== "all" && store.filters.search !== "") return;
  await emit("loadMore");
}, 100);

useInfiniteScroll(scrollContainer, debouncedLoadMore, { distance: 50 });
</script>
