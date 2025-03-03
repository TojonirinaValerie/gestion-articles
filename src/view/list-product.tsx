import FramerMotionAnimationWrapper from "@/components/framer-motion-animation-wrapper";
import Filter from "@/components/product/filter";
import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

type ListProductProps = {
  data: Product[];
  category: string[];
};

const ListProduct: React.FC<ListProductProps> = ({ data, category }) => {
  // var
  const router = useRouter();

  // methode
  const handleToAddProduct = () => {
    router.push("/product/add");
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-row justify-start w-full">
        <Button onClick={handleToAddProduct}>New Product</Button>
      </div>
      <Filter listCategory={category} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
        {data.map((item, index) => (
          <FramerMotionAnimationWrapper key={item.id} delay={0.1 * index}>
            <ProductCard product={item} />
          </FramerMotionAnimationWrapper>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
