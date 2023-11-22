export interface User {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    number: number;
    street: string;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value?: string;
  };
}
