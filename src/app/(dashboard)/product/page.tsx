"use client";
// react
import { useEffect, useState } from "react";

// extern
import { useQuery } from "@tanstack/react-query";

// component
import Loading from "@/components/shared/loading";
import Error from "@/components/shared/error";
import ListProduct from "@/view/list-product";

import { useAppStore } from "@/store";
import type { Product } from "@/types/product";
import { getAllCategory, getProducts } from "@/api/product";
import { searchProduct } from "@/lib/product";

const ProductPage = () => {
  // State
  const [list, setlist] = useState<Product[]>([]);
  // --------------------------------------------------------------

  // Var
  const { searchValue, category } = useAppStore();
  const { data, isLoading, error } = useQuery({
    queryKey: ["allPoducts"],
    queryFn: getProducts,
  });
  const listCategoryState = useQuery({
    queryKey: ["allCategory"],
    queryFn: getAllCategory,
  });
  // --------------------------------------------------------------

  useEffect(() => {
    if (data) {
      if (searchValue === "" && category === "all category") setlist(data.data);
      else setlist(searchProduct(data.data, searchValue, category));
    }
  }, [searchValue, data?.data, category]);

  if (isLoading || listCategoryState.isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;
  if (listCategoryState.error)
    return <p>Error : {listCategoryState.error.message}</p>;

  return (
    <ListProduct
      data={list}
      category={listCategoryState.data ? listCategoryState.data.data : []}
    />
  );
};

export default ProductPage;
