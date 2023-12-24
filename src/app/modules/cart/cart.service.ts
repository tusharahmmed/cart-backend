/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Types } from 'mongoose';
import { ICart } from './cart.interface';
import { Cart } from './cart.model';

// create
const createNewCart = async (payload: ICart) => {
  // check exist
  const existList = await Cart.isCartExist(payload.userId as Types.ObjectId);

  let result = null;
  if (!existList) {
    result = await Cart.create(payload);

    // return new list with populate
    const newList = (await result.populate('userId')).populate(
      'items.productId',
    );
    return newList;
  }

  result = await Cart.addItemtoList(payload);
  return result;
};

// get cart by user id
const getCartByUserID = async (userId: string) => {
  const result = await Cart.findOne({ userId })
    .populate('userId')
    .populate('items.productId');
  return result;
};

// delete cart by user id
const deleteCartByUserID = async (userId: string) => {
  const result = await Cart.findOneAndDelete({ userId })
    .populate('userId')
    .populate('items.productId');
  return result;
};

// update status
// const updateCart = async (
//   userId: string,
//   payload: ICart & { _id: string },
// ) => {
//   const { _id, ...others } = payload;

//   // initialize session
//   const session = await mongoose.startSession();

//   let resultData = null;

//   try {
//     // start transaction
//     session.startTransaction();

//     // remove old status

//     const removed = await Cart.findOneAndUpdate(
//       { userId },
//       {
//         $pull: { items: { _id: _id } },
//       },
//     );
//     // add new status
//     const result = await Cart.findOneAndUpdate(
//       { userId },
//       {
//         $addToSet: { books: others },
//       },
//       { new: true },
//     )
//       .populate('userId')
//       .populate('items.productId');

//     resultData = result;

//     // commit & end the session
//     await session.commitTransaction();
//     await session.endSession();
//   } catch (error) {
//     // if error abort & end session
//     await session.abortTransaction();
//     await session.endSession();
//     throw error;
//   }

//   return resultData;
// };

// remove item from list
const removeItem = async (userId: string, { _id }: { _id: string }) => {
  const result = await Cart.findOneAndUpdate(
    { userId },
    {
      $pull: { items: { _id } },
    },
    { new: true },
  )
    .populate('userId')
    .populate('items.productId');

  return result;
};

export const CartService = {
  createNewCart,
  getCartByUserID,
  deleteCartByUserID,
  //   updateStatus,
  removeItem,
};
