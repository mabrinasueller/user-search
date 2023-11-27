import axios from "axios";
import { User, ApiUser } from "../types/types";

const axiosInstance = axios.create({
  baseURL: "https://randomuser.me/",
});

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function fetchUsers() {
  return axiosInstance
    .get("api/", {
      params: {
        inc: "gender,name,email,picture,location,phone,cell,id",
        noinfo: true,
        results: 25,
      },
    })
    .then((response) => {
      const users: User[] = response.data.results.map((user: ApiUser) => ({
        email: user.email,
        gender: user.gender,
        firstName: capitalizeFirstLetter(user.name.first),
        lastName: capitalizeFirstLetter(user.name.last),
        picture: {
          large: user.picture.large,
          thumbnail: user.picture.thumbnail,
        },
        id: user.id.value,
        location: {
          street: {
            number: user.location.street.number,
            name: user.location.street.name,
          },
          city: user.location.city,
          postcode: user.location.postcode,
          country: user.location.country,
        },
        phone: user.phone,
        cell: user.cell,
      }));
      return users;
    })
    .catch((error) => {
      console.log("Error", error);
      throw error;
    });
}
