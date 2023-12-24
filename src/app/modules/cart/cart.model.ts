/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from 'mongoose';
import { ITEM_SIZE } from './cart.constant';
import { CartModel, ICart } from './cart.interface';

const cartSchema = new Schema<ICart, CartModel>({
  userId: {
    type: String,
    required: true,
    ref: 'User',
  },
  items: {
    required: true,
    type: [
      {
        productId: {
          type: String,
          required: true,
          ref: 'Product',
        },
        size: {
          type: String,
          required: true,
          enum: ITEM_SIZE,
        },
        color: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});

// statics

cartSchema.statics.isCartExist = async function (userId: string) {
  const exist = await Cart.findOne({ userId });

  return exist;
};

cartSchema.statics.addItemtoList = async function (payload: ICart) {
  const { userId, items } = payload;

  // check duplicate entry
  // const exist: any = await Cart.findOne({
  //   userId,
  //   'items.productId': items[0]?.productId,
  // });

  // if (exist) {
  //   // if same product entry

  //   throw new ApiError(httpStatus.NOT_ACCEPTABLE, 'Product is already exist');
  // }
  // upadate list
  const result = await Cart.findOneAndUpdate(
    { userId },
    { $addToSet: { items: items[0] } },
    { new: true },
  )
    .populate('userId')
    .populate('items.productId');

  return result;
};

export const Cart = model<ICart, CartModel>('Cart', cartSchema);
