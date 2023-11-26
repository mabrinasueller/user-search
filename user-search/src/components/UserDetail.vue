<script setup lang="ts">
import { defineProps } from "vue";
import { User } from "../types/types";

// eslint-disable-next-line
const props = defineProps<{ selectedUser: User | null }>();
</script>

<template>
  <div class="bg-white h-1/2 rounded-lg shadow-2xl w-full lg:w-1/2 md:flex">
    <div v-if="selectedUser" class="flex flex-col w-full px-6 py-4">
      <div class="flex flex-row items-center">
        <img
          :src="selectedUser.picture.large"
          alt="profile picture"
          class="md:w-1/3 rounded-full object-cover"
        />
        <div class="flex flex-col ml-4 text-2xl">
          <div>
            Name: {{ selectedUser.firstName }} {{ selectedUser.lastName }}
          </div>
          <div v-if="selectedUser.id">ID: {{ selectedUser.id }}</div>
        </div>
      </div>
      <hr class="my-2 w-full" />
      <div class="text-xl">
        <div v-if="selectedUser.location">
          <div>
            Street:
            {{ selectedUser.location.street.name }}
            {{ selectedUser.location.street.number }}
          </div>
          <div>
            Postcode:
            {{ selectedUser.location.postcode }}
            {{ selectedUser.location.city }}
          </div>

          <div>Country: {{ selectedUser.location.country }}</div>
        </div>
        <div v-if="selectedUser.phone">Phone: {{ selectedUser.phone }}</div>
        <div v-if="selectedUser.cell">Cell: {{ selectedUser.cell }}</div>
        <div v-if="selectedUser.email">Email: {{ selectedUser.email }}</div>
      </div>
    </div>
    <div v-else>
      <p>Please select a user</p>
    </div>
  </div>
</template>
