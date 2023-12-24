import { Schema, model } from 'mongoose';
import { IProduct, ProductModel } from './product.interface';

const productSchama = new Schema<IProduct, ProductModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<IProduct, ProductModel>('Product', productSchama);
