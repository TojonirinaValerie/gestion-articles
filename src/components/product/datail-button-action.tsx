"use client";

// Next
import { useRouter } from "next/navigation";

// Externe
import { useMutation, useQueryClient } from "@tanstack/react-query";

// UI
import { Button } from "@/components/ui/button";
import DeleteConfirmation from "./delete-confirmation";

import { Product } from "@/types/product";
import { deleteProduct } from "@/api/product";

type EditActionButtonProps = {
  product: Product;
};
const DetailButtonAction: React.FC<EditActionButtonProps> = ({ product }) => {
  // var
  const queryClient = useQueryClient();
  const router = useRouter();
  // --------------------------------------------------------------

  // mutation
  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["allPoducts"] });
      router.push("/product");
    },
  });
  // --------------------------------------------------------------

  // methode
  const handleEditProduct = () => {
    router.push(`/product/edit/${product.id}`);
  };

  const handleDelete = () => {
    mutation.mutate(product.id.toString());
  };
  // --------------------------------------------------------------

  return (
    <div className="flex flex-row">
      <Button
        className="flex-1 mr-2"
        onClick={handleEditProduct}
        variant="secondary"
      >
        Edit
      </Button>
      <DeleteConfirmation
        onDelete={handleDelete}
        isLoading={mutation.isPending}
      />
    </div>
  );
};

export default DetailButtonAction;
