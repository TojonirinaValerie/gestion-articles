// Next
import Link from "next/link";
import Image from "next/image";

// UI
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { Product } from "@/types/product";
import ProductCardWrapper from "./product-card-wrapper";
import { capitalize } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <ProductCardWrapper>
      <Link href={`/product/detail/${product.id}`}>
        <Card className="rounded-[5px] overflow-hidden">
          <div className="pli-2 pbs-2">
            <div className="flex overflow-hidden h-[200px] w-full relative">
              <Image
                src={product.image}
                fill={true}
                objectFit="cover"
                alt={product.title}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 p-3">
            <div className="flex flex-col">
              <p className="hover:text-primary truncate  font-bold">
                {product.title}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>{capitalize(product.category)}</p>
              <p className="font-medium mie-1 mt-1">${product.price}</p>
            </div>
          </div>
        </Card>
      </Link>
    </ProductCardWrapper>
  );
};

export default ProductCard;
