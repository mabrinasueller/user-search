<script setup lang="ts">
import { defineProps } from "vue";
import { User } from "../types/types";
import { Icon } from "@iconify/vue";

// eslint-disable-next-line
const props = defineProps<{ selectedUser: User | null }>();
</script>

<template>
  <div
    class="bg-white h-full rounded-lg shadow-2xl w-full m:w-2/3 lg:w-full md:flex"
  >
    <div v-if="selectedUser" class="flex flex-col w-full px-8 py-6">
      <div class="flex md:flex-col lg:flex-row items-center">
        <img
          :src="selectedUser.picture.large"
          alt="profile picture"
          class="md:w-1/3 rounded-full object-cover"
        />
        <div class="flex flex-col ml-8 text-2xl md:mt-4">
          <div class="mb-2">
            <span class="font-bold">Name:</span> {{ selectedUser.firstName }}
            {{ selectedUser.lastName }}
          </div>
          <div v-if="selectedUser.id">
            <span class="font-bold">ID:</span> {{ selectedUser.id }}
          </div>
        </div>
      </div>
      <hr class="my-4 w-full" />
      <div class="text-xl sm:text-center lg:text-left">
        <div v-if="selectedUser.location">
          <div class="mb-2">
            <span class="font-bold">Street:</span>
            {{ selectedUser.location.street.name }}
            {{ selectedUser.location.street.number }}
          </div>
          <div class="mb-2">
            <span class="font-bold">Postcode:</span>
            {{ selectedUser.location.postcode }}
            {{ selectedUser.location.city }}
          </div>
          <div class="mb-2">
            <span class="font-bold">Country:</span>
            {{ selectedUser.location.country }}
          </div>
        </div>
        <div v-if="selectedUser.phone">
          <div class="mb-2">
            <span class="font-bold">Phone:</span> {{ selectedUser.phone }}
          </div>
        </div>
        <div v-if="selectedUser.cell">
          <div class="mb-2">
            <span class="font-bold">Cell:</span> {{ selectedUser.cell }}
          </div>
        </div>
        <div v-if="selectedUser.email">
          <a
            :href="'mailto:' + selectedUser.email"
            class="mb-2 flex items-center justify-center lg:justify-start"
          >
            <span class="font-bold mr-2">Email:</span> {{ selectedUser.email }}
            <Icon icon="typcn:mail" class="cursor-pointer ml-2" />
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex items-center p-8">
        <div
          class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6"
        >
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div>
          <span class="block text-gray-500">Please select a user</span>
        </div>
      </div>
    </div>
  </div>
</template>
