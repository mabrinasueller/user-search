import axios from "axios";
import { ref } from "vue";

// const data = ref<string | null>(null);

// export const fetchUsers = async (): Promise  => {
//   try {
//     const response = await axios.get("https://randomuser.me/");
//     data.value = response.data.title;
//     return data.value;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

const axiosInstance = axios.create({
  baseURL: "https://randomuser.me/",
});

export function fetchUsers() {
  return axiosInstance
    .get("api/", {
      params: {
        inc: "gender,name,email,picture",
        noinfo: true,
        results: 25,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error", error);
      throw error;
    });
}
