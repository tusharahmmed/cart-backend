import { Product } from './product.model';

// get all product
const getAllProduct = async () => {
  const result = await Product.find();

  return {
    data: result,
  };
};
// get single product
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);

  return {
    data: result,
  };
};

export const ProductService = {
  getAllProduct,
  getSingleProduct,
};
