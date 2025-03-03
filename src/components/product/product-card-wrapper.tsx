"use client";

import { motion } from "framer-motion";

type ProductCardWrapperProps = {
  children: React.ReactNode;
};
const ProductCardWrapper: React.FC<ProductCardWrapperProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ProductCardWrapper;
