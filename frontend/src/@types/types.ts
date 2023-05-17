export interface User{
    _id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    avatar: string;
    token: string;
    phoneNumber: string;
    address: string;
    city:string;
    state:string|null;
    country:string;
    occupation:string;
    transactions: string[];
  }