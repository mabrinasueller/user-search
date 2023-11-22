<script setup lang="ts">
import { defineProps } from "vue";
import { User } from "../types/types";

const props = defineProps<{ selectedUser: User | null }>();
</script>

<template>
  <div class="user__detail">
    <div v-if="selectedUser">
      <img :src="selectedUser.picture.large" alt="profile picture" />
      <div>{{ selectedUser.firstName }} {{ selectedUser.lastName }}</div>
      <div v-if="selectedUser.id">ID: {{ selectedUser.id }}</div>
      <div v-if="selectedUser.location">
        <p>
          {{ selectedUser.location.street.name }}
          {{ selectedUser.location.street.number }}
        </p>
        <p>
          {{ selectedUser.location.postcode }} {{ selectedUser.location.city }}
        </p>
        <p>{{ selectedUser.location.country }}</p>
      </div>
      <div v-if="selectedUser.phone">Phone: {{ selectedUser.phone }}</div>
      <div v-if="selectedUser.cell">Cell: {{ selectedUser.cell }}</div>
      <div v-if="selectedUser.email">Email: {{ selectedUser.email }}</div>
    </div>
    <div v-else>
      <p>Please select a user</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/styles.scss";
</style>
