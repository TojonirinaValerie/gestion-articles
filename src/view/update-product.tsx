"use client";

// Next
import { useRouter } from "next/navigation";

// Extern
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Component
import ProductForm from "@/components/product/product-form";

import { ProductFormValueType } from "@/validation/product-validation";
import { Product } from "@/types/product";
import { updateProduct } from "@/api/product";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import Loading from "@/components/shared/loading";
import { toast } from "sonner";

type EditProductProps = {
  product: Product;
};

const UpdateProduct: React.FC<EditProductProps> = ({ product }) => {
  // var
  const clientQuery = useQueryClient();
  const router = useRouter();
  // ------------------------------------------------------------

  // Mutation
  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      clientQuery.invalidateQueries({ queryKey: ["allPoducts"] });
      toast.success("The product has been successfully modified");
      router.push(`/product/detail/${product.id}`);
    },
    onError: (error) => {
      toast.error("An error occurred.", {
        description: error.message,
      });
    },
  });
  // ------------------------------------------------------------

  // Methode
  const handleSubmit = (values: z.infer<ProductFormValueType>) => {
    mutation.mutate({
      ...values,
      id: product.id,
      image: values.image, // Modify in the case of a real upload
    });
  };
  // ------------------------------------------------------------

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-row items-start w-full max-w-[800px]">
        <ProductForm
          type="edit"
          onSubmit={handleSubmit}
          defaultValue={product}
          isLoading={mutation.isPending}
        />
      </div>
    </div>
  );
};

export default UpdateProduct;
