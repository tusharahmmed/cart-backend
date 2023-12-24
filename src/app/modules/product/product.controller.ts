import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { ProductService } from './product.service';

// get all products
const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProduct();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Products retrieved successfully',

    data: result,
  });
});
// get single product
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.getSingleProduct(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product retrieved successfully',

    data: result,
  });
});

export const ProductController = {
  getAllProduct,
  getSingleProduct,
};
