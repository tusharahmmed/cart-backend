import { z } from 'zod';
import { ITEM_SIZE } from './cart.constant';

const createCartZodSchama = z.object({
  body: z.object({
    userId: z.string({ required_error: 'User Id is required' }),
    items: z.array(
      z.object({
        productId: z.string({ required_error: 'Product id is required' }),
        color: z.string({ required_error: 'Product color is required' }),
        quantity: z.string({ required_error: 'Quantity is required' }),
        size: z.enum([...ITEM_SIZE] as [string, ...string[]], {
          required_error: 'Product size is required',
        }),
      }),
    ),
  }),
});

const changeQuantityCartZodSchama = z.object({
  body: z.object({
    _id: z.string({ required_error: '_id is required' }),
    productId: z.string({ required_error: 'Product id is required' }),
    quantity: z.number({ required_error: 'Product quantity is required' }),
  }),
});

const removeItemCartZodSchama = z.object({
  body: z.object({
    _id: z.string({ required_error: '_id is required' }),
  }),
});

export const CartValidation = {
  createCartZodSchama,
  changeQuantityCartZodSchama,
  removeItemCartZodSchama,
};
