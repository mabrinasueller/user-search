<script setup lang="ts">
import { ref, onMounted, computed, watchEffect } from "vue";
import UserDetail from "@/components/UserDetail.vue";
import InfiniteScroll from "@/components/InfiniteScroll.vue";
import UserList from "@/components/UserList.vue";
import InputSearch from "@/components/InputSearch.vue";
import RadioFilter from "@/components/RadioFilter.vue";
import { fetchUsers } from "@/services/useApi";
import { useMyStore } from "@/store/events";
import { User } from "../types/types";

const store = useMyStore();
const searchValue = ref("");
const radioFilter = ref("");

const handleSearch = (search: string) => {
  store.filters.search = search;
  searchValue.value = search;
};

const handleRadioFilter = (filterByGender: string) => {
  store.filters.gender = filterByGender;
  radioFilter.value = filterByGender;
};

const handleUserClick = (user: User) => {
  store.selectedUser = user;
};

const handleShowMore = async () => {
  const moreUsers = await fetchUsers();
  store.users.push(...moreUsers);
};

const filteredUsers = computed(() => {
  let users = store.users;

  switch (store.filters.gender) {
    case "female":
      users = users.filter((user) => user.gender === "female");
      break;
    case "male":
      users = users.filter((user) => user.gender === "male");
  }
  if (store.filters.search !== "") {
    users = users.filter(
      (user) =>
        user.firstName === store.filters.search ||
        user.lastName === store.filters.search
    );
  }
  return users;
});

onMounted(() => {
  store.initializeStoreFromLocalStorage();

  watchEffect(() => {
    store.saveStoreToLocalStorage();
  });

  getUsers();
});

const getUsers = async () => {
  const users = await fetchUsers();
  store.users.push(...users);
};
</script>

<template>
  <div class="flex">
    <div
      class="w-1/3 px-6 pb-6 parent flex-col flex flex-none h-screen overflow-y-auto relative"
    >
      <div class="sticky child flex-1 bg-white top-0 left-0 pt-6">
        <InputSearch @search="handleSearch" />
        <RadioFilter @filter="handleRadioFilter" />
      </div>
      <UserList :filteredUsers="filteredUsers" @userClick="handleUserClick" />
      <Suspense>
        <InfiniteScroll @loadMore="handleShowMore"></InfiniteScroll>
      </Suspense>
    </div>
    <div
      class="h-full w-full flex-1 bg-gradient-to-tr from-orange-400 via-red-300 to-blue-500 min-h-screen flex items-center justify-center"
    >
      <UserDetail :selectedUser="store.selectedUser" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/styles.scss";
</style>
