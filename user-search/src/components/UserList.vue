<template>
  <div>
    <div
      v-for="user in filteredUsers"
      :key="user.email"
      class="flex flex-row p-4 mb-4 bg-white border-solid border-2 border-gray-500 cursor-pointer"
      @click="userClick(user)"
    >
      <div class="mr-4">
        <img
          :src="user.picture.thumbnail"
          alt="profile picture"
          class="rounded-full"
        />
      </div>
      <div class="user__info">
        <div class="font-bold">{{ user.firstName }} {{ user.lastName }}</div>
        <div>{{ user.email }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import { User } from "../types/types";

// eslint-disable-next-line
const props = defineProps<{
  filteredUsers: User[];
}>();

const userClick = (user: User) => {
  emit("userClick", user);
};

const emit = defineEmits(["userClick"]);
</script>

<style type="scss">
@import "@/styles/styles.scss";
</style>
