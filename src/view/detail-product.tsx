// Next
import Image from "next/image";

// Component
import { Rating } from "@/components/shared/rating";
import DetailButtonAction from "@/components/product/datail-button-action";

import { Product } from "@/types/product";
import FramerMotionAnimationWrapper from "@/components/framer-motion-animation-wrapper";

type DetailProductProps = {
  product: Product;
};

const DetailProduct: React.FC<DetailProductProps> = ({ product }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-row items-start max-w-[800px] mt-2 gap-6 max-lg:flex-col max-lg:items-center">
        <FramerMotionAnimationWrapper
          delay={0.1}
          className="overflow-hidden w-1/2 max-lg:w-[80%]"
        >
          <Image
            src={product.image}
            width={400}
            height={400}
            objectFit="cover"
            alt={product.title}
            className="w-full overflow-hidden"
          />
        </FramerMotionAnimationWrapper>
        <div className="p-4 flex flex-col gap-2 w-1/2 max-lg:w-full">
          <FramerMotionAnimationWrapper
            delay={0.4}
            className="text-[1.5rem] font-bold"
          >
            {product.title}
          </FramerMotionAnimationWrapper>
          <FramerMotionAnimationWrapper delay={0.7}>
            Category: {product.category}
          </FramerMotionAnimationWrapper>
          <FramerMotionAnimationWrapper delay={1}>
            {product.rating && (
              <div className="flex flex-row gap-2">
                <Rating rating={product.rating.rate} variant="yellow" />
                <span className="">{`(${product.rating.count})`}</span>
              </div>
            )}
          </FramerMotionAnimationWrapper>
          <FramerMotionAnimationWrapper delay={1.3} className="text-grey">
            {product.description}
          </FramerMotionAnimationWrapper>
          <FramerMotionAnimationWrapper
            delay={1.6}
            className="my-4 text-[3rem] font-[600]"
          >
            ${product.price}
          </FramerMotionAnimationWrapper>

          <FramerMotionAnimationWrapper delay={1.9}>
            <DetailButtonAction product={product} />
          </FramerMotionAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
