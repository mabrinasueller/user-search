<template>
  <div
    v-for="user in filteredUsers"
    :key="user.email"
    class="user__wrapper"
    @click="userClick(user)"
  >
    <div class="user__image">
      <img :src="user.picture.thumbnail" alt="profile picture" />
    </div>
    <div class="user__info">
      <div>{{ user.firstName }} {{ user.lastName }}</div>
      <div>{{ user.email }}</div>
    </div>
  </div>
  <button @click="showMore()">Show more</button>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";
import { User } from "../types/types";

const props = defineProps<{
  filteredUsers: User[];
}>();

const userClick = (user: User) => {
  emit("userClick", user);
};

const emit = defineEmits(["showMore", "userClick"]);

const showMore = () => {
  emit("showMore");
};

const listEl = ref(null);

let currentPage = 1;

// useInfiniteScroll(
//   listEl,
//   async () => {
//     await usersToDisplayOnScroll();
//   },
//   { distance: 25 }
// );
</script>

<style type="scss">
@import "@/scss/styles.scss";
</style>
