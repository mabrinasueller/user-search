import { defineStore } from "pinia";
import { User } from "../types/types";
import { fetchUsers } from "@/services/useApi";

export const useMyStore = defineStore("users", {
  state: () => ({
    users: [] as User[],
  }),
  actions: {},
});
