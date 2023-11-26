export interface ApiUser {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    thumbnail: string;
  };
  id: {
    value: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    postcode: string;
    country: string;
  };
  phone: string;
  cell: string;
}

export interface User {
  email: string;
  gender: string;
  firstName: string;
  lastName: string;
  picture: {
    large: string;
    thumbnail: string;
  };
  id: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    postcode: string;
    country: string;
  };
  phone: string;
  cell: string;
}
