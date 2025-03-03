"use client";

// Next
import { useRouter } from "next/navigation";

// Externe
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Components
import ProductForm from "@/components/product/product-form";

import { addProduct } from "@/api/product";
import type { ProductFormValueType } from "@/validation/product-validation";
import { toast } from "sonner";

const AddProduct = () => {
  // var
  const queryClient = useQueryClient();
  const router = useRouter();
  // -------------------------------------------------------------------------

  // Mutation
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allPoducts"] });
      router.push("/product");
    },
    onError: (error) => {
      toast.error("An error occurred.", {
        description: error.message,
      });
    },
  });
  // -------------------------------------------------------------------------

  // Methode
  const handleSubmit = (values: z.infer<ProductFormValueType>) => {
    mutation.mutate({
      ...values,
      image: values.image, // Modify in the case of a real upload
    });
  };
  // -------------------------------------------------------------------------

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-row items-start w-full max-w-[800px]">
        <ProductForm
          type="add"
          onSubmit={handleSubmit}
          isLoading={mutation.isPending}
        />
      </div>
    </div>
  );
};

export default AddProduct;
