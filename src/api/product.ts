import { Product } from "@/types/product";
import axiosInstance from "./axios";
import { api } from "./api";

export const getProducts = () => {
  return axiosInstance.get<Product[]>(api.getAllProduct);
};

export const getAllCategory = () => {
  return axiosInstance.get<string[]>(api.getAllCategories);
};

export const getProductById = (id: string) => {
  return axiosInstance.get<Product>(api.getProductById(id));
};

export const deleteProduct = (id: string) => {
  return axiosInstance.delete<Product>(api.deleteProduct(id));
};

export const addProduct = (data: Omit<Product, "id" | "rating">) => {
  return axiosInstance.post<Product>(api.addProduct, data);
};

export const updateProduct = (data: Product) => {
  return axiosInstance.patch(api.updateProduct(data.id.toString()), data);
};
