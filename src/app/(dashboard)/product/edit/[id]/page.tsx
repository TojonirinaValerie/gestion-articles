"use client";

// Component
import Loading from "@/components/shared/loading";
import Error from "@/components/shared/error";
import UpdateProduct from "@/view/update-product";

import useFetchProduct from "@/hooks/product";

type UpdateProductPageProps = {
  params: Promise<{ id: string }>;
};

const UpdateProductPage: React.FC<UpdateProductPageProps> = ({ params }) => {
  const {
    queryResponse: { data, isLoading, error },
  } = useFetchProduct({ params });

  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return data ? <UpdateProduct product={data?.data} /> : <p></p>;
};

export default UpdateProductPage;
