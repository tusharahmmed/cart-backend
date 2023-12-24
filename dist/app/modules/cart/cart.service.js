"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const cart_model_1 = require("./cart.model");
// create
const createNewCart = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // check exist
    const existList = yield cart_model_1.Cart.isCartExist(payload.userId);
    let result = null;
    if (!existList) {
        result = yield cart_model_1.Cart.create(payload);
        // return new list with populate
        const newList = (yield result.populate('userId')).populate('items.productId');
        return newList;
    }
    result = yield cart_model_1.Cart.addItemtoList(payload);
    return result;
});
// get cart by user id
const getCartByUserID = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findOne({ userId })
        .populate('userId')
        .populate('items.productId');
    return result;
});
// delete cart by user id
const deleteCartByUserID = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findOneAndDelete({ userId })
        .populate('userId')
        .populate('items.productId');
    return result;
});
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
const removeItem = (userId, { _id }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findOneAndUpdate({ userId }, {
        $pull: { items: { _id } },
    }, { new: true })
        .populate('userId')
        .populate('items.productId');
    return result;
});
exports.CartService = {
    createNewCart,
    getCartByUserID,
    deleteCartByUserID,
    //   updateStatus,
    removeItem,
};
