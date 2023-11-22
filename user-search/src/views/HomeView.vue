<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import UserDetail from "@/components/UserDetail.vue";
import InfiniteScroll from "@/components/InfiniteScroll.vue";
import UserList from "@/components/UserList.vue";
import InputSearch from "@/components/InputSearch.vue";
import RadioFilter from "@/components/RadioFilter.vue";
import { fetchUsers } from "@/services/useApi";
import { useMyStore } from "@/store/events";
import { User } from "../types/types";
import router from "@/router/index";

const store = useMyStore();
const selectedUser = ref<User | null>(null);
const usersList = ref<User[]>([]);
const searchValue = ref("");
const radioFilter = ref("");

const handleSearch = (search: string) => {
  searchValue.value = search;
};

const handleRadioFilter = (filterByGender: string) => {
  radioFilter.value = filterByGender;
};

const handleUserClick = (user: User) => {
  console.log("clicked user:", user);
  selectedUser.value = user;
};

const handleShowMore = async () => {
  const moreUsers = await fetchUsers();
  usersList.value.push(...moreUsers);
  store.users = usersList.value;
};

const filteredUsers = computed(() => {
  let users = store.users;

  switch (radioFilter.value) {
    case "female":
      users = users.filter((user) => user.gender === "female");
      break;
    case "male":
      users = users.filter((user) => user.gender === "male");
  }
  if (searchValue.value !== "") {
    users = users.filter(
      (user) =>
        user.firstName === searchValue.value ||
        user.lastName === searchValue.value
    );
  }
  appendValueToUrl();

  return users;
});

const appendValueToUrl = () => {
  const query = { search: searchValue.value, gender: radioFilter.value };
  router.push({ query });
};

onMounted(async () => {
  try {
    const initialUsers = await fetchUsers();
    usersList.value.push(...initialUsers);
    store.users = usersList.value;
  } catch (error) {
    console.error("Error fetching initial users:", error);
  }
});
</script>

<template>
  <div class="home">
    <div class="sidebar">
      <InputSearch @search="handleSearch" />
      <RadioFilter @filter="handleRadioFilter" />
      <UserList
        :filteredUsers="filteredUsers"
        @showMore="handleShowMore"
        @userClick="handleUserClick"
      />
    </div>
    <UserDetail :selectedUser="selectedUser" />
    <!-- <Suspense>
      <InfiniteScroll></InfiniteScroll>
    </Suspense> -->
  </div>
</template>

<style type="scss">
@import "@/scss/styles.scss";
</style>
