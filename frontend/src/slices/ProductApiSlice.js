import { PRODUCTS_URL, UPLOADS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({pageNumber, keywordd}) => ({
                url: PRODUCTS_URL,
                params: {
                    pageNumber,
                    keywordd
                },
            }),
            keepUnuserdDataFor: 5,
            providesTags: ['Product'],
        }), 
        createProduct: builder.mutation({
            query: (product) => ({
                url: PRODUCTS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['Product'], // stop caching products (to have fresh data)
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
                method: 'DELETE',
            }),
            providesTags: ['Product'], // stop caching products (to have fresh data)
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Product'], // stop caching products (to have fresh data)
        }),        
        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnuserdDataFor: 5
        }),  
        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: `${UPLOADS_URL}`,
                method: 'POST',
                body: data,
            }),
        }),  
        createReview: builder.mutation({
            query: (data) => ({
              url: `${PRODUCTS_URL}/${data.productId}/reviews`,
              method: 'POST',
              body: data,
            }),
            invalidatesTags: ['Product'],
        }),  
    }),
});

export const { 
    useGetProductsQuery, 
    useGetProductDetailsQuery,
    useCreateProductMutation,  
    useDeleteProductMutation,
    useUpdateProductMutation,
    useCreateReviewMutation,
    useUploadProductImageMutation
} = productsApiSlice;