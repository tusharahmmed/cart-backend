import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { CartService } from './cart.service';

// create new
const createNewCart: RequestHandler = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await CartService.createNewCart(payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart created successfully',
    data: result,
  });
});

// get by user id
const getCartByUserID: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const { _id } = req.user as JwtPayload;

  // chekck requested user
  if (id !== _id) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }

  const result = await CartService.getCartByUserID(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart retrived successfully',
    data: result,
  });
});

// delete by user id
const deleteCartByUserID: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const { _id } = req.user as JwtPayload;

  // chekck requested user
  if (id !== _id) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }

  const result = await CartService.deleteCartByUserID(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart deleted successfully',
    data: result,
  });
});

// update by user id
// const updateStatus: RequestHandler = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const payload = req.body;

//   const { _id } = req.user as JwtPayload;

//   // chekck requested user
//   if (id !== _id) {
//     throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
//   }

//   const result = await WishListService.updateStatus(id, payload);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Wishlist status updated successfully',
//     data: result,
//   });
// });

// remove item
const removeItem: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const { _id } = req.user as JwtPayload;

  // chekck requested user
  if (id !== _id) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }

  const result = await CartService.removeItem(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart item removed successfully',
    data: result,
  });
});

export const CartController = {
  createNewCart,
  getCartByUserID,
  deleteCartByUserID,
  //   updateStatus,
  removeItem,
};
