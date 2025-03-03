// react
import { useEffect, useState } from "react";

// extern
import { useQuery } from "@tanstack/react-query";

import { getProductById } from "@/api/product";

type useFetchProductProps = {
  params: Promise<{ id: string }>;
};
const useFetchProduct = ({ params }: useFetchProductProps) => {
  // state
  const [productId, setProductId] = useState<string | null>(null);

  // var
  const queryResponse = useQuery({
    queryKey: [`getSingleProduct`, productId],
    queryFn: async () => getProductById((await params).id),
    enabled: !!productId,
  });

  useEffect(() => {
    const fetchParams = async () => {
      const id = (await params).id;
      if (id) setProductId(id);
    };
    fetchParams();
  }, [params]);

  return { productId, queryResponse };
};

export default useFetchProduct;
