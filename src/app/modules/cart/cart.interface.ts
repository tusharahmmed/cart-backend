/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Model, Types } from 'mongoose';
import { IProduct } from '../product/product.interface';
import { IUser } from '../user/user.interface';

export type IItemsList = {
  productId: Types.ObjectId | IProduct;
  size: 'sm' | 'md' | 'xl' | '2xl' | '3xl' | '4xl';
  color: string;
  quantity: number;
};

export type ICart = {
  userId: Types.ObjectId | IUser;
  items: IItemsList[];
};

export type CartModel = {
  isCartExist(userId: Types.ObjectId): Promise<ICart>;
  addItemtoList(payload: ICart): Promise<ICart>;
} & Model<IUser, Record<string, never>>;
