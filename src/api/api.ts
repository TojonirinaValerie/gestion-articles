export const api = {
    getAllProduct: '/products',
    addProduct: '/products',
    getAllCategories: '/products/categories',
    getProductById: (id: string)=> `/products/${id}`,
    deleteProduct: (id: string)=> `/products/${id}`,
    updateProduct: (id: string)=> `/products/${id}`,
}