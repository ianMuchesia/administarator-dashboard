import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const api = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL  }),
   tagTypes:["User", "Products"],
   endpoints: (build)=>({
    getUser: build.query({
        query:(id)=>`general/users/${id}`,
        providesTags: ["User"]
    }),
    getProducts:build.query<any,void>({
        query:()=>"client/products",
        providesTags: ["Products"]
    })
   })
  })

  export const {useGetUserQuery, useGetProductsQuery} = api
