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



  export interface Product{
    _id: string;
    name: string;
    description: string;
    category:string;
    rating: number;
    supply:number;
    price:number;
  }

  export interface ProductStat{
    product: Product;
    yearlySalesTotal:number;
    yearlyTotalSoldUnits:number;
    monthlyData: [
      {
        month: string;
        totalSales: number;
        totalUnits: number;
        _id: string;
      }
    ]
  }