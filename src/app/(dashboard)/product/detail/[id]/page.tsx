"use client";

// Components
import Loading from "@/components/shared/loading";
import Error from "@/components/shared/error";
import useFetchProduct from "@/hooks/product";
import DetailProduct from "@/view/detail-product";

type ProductDetailProps = {
  params: Promise<{ id: string }>;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const {
    queryResponse: { data, isLoading, error },
  } = useFetchProduct({ params });

  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return data ? <DetailProduct product={data?.data} /> : <p></p>;
};

export default ProductDetail;
