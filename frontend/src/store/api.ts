import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const api = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL  }),
   tagTypes:["User", "Products", "Customers", "Transaction", "Geography", "Sales"],
   endpoints: (build)=>({
    getUser: build.query({
        query:(id)=>`general/users/${id}`,
        providesTags: ["User"]
    }),
    getProducts:build.query<any,void>({
        query:()=>"client/products",
        providesTags: ["Products"]
    }),
    getCustomers:build.query<any, void>({
        query:()=>"client/customers",
        providesTags: ["Customers"]
    }),
    getTransactions:build.query({
        query:({page , pageSize , sort, search })=>({
            url:"client/transactions",
            method: 'GET',
            params: {page , pageSize, sort , search}
        }),
        providesTags: ["Transaction"]
        
    }),
    getGeography:build.query<any, void>({
       query:()=>"client/geography",
       providesTags: ["Geography"]
    }),
    getSales: build.query({
        query: () => "sales",
        providesTags: ["Sales"],
      }),
   })
  })

  export const {useGetUserQuery, useGetProductsQuery, useGetCustomersQuery,useGetTransactionsQuery, useGetGeographyQuery} = api
