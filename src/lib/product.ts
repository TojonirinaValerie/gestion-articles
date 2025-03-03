import type { Product } from "@/types/product";

export const searchProduct = (
  listProduct: Product[],
  search: string,
  category: string
) => {
  return listProduct.filter((product) => {
    if (category === "all category")
      return product.title.toLowerCase().includes(search.toLowerCase());
    else {
      return (
        product.title.toLowerCase().includes(search.toLowerCase()) &&
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }
  });
};
