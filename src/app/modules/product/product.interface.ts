/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Model } from 'mongoose';

export type IProduct = {
  title: string;
  image: string;
  color: string;
  size: string;
  price: number;
};

export interface ProductModel extends Model<IProduct, Record<string, never>> {}
