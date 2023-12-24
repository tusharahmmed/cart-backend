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
exports.Cart = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongoose_1 = require("mongoose");
const cart_constant_1 = require("./cart.constant");
const cartSchema = new mongoose_1.Schema({
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
                    enum: cart_constant_1.ITEM_SIZE,
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
cartSchema.statics.isCartExist = function (userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const exist = yield exports.Cart.findOne({ userId });
        return exist;
    });
};
cartSchema.statics.addItemtoList = function (payload) {
    return __awaiter(this, void 0, void 0, function* () {
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
        const result = yield exports.Cart.findOneAndUpdate({ userId }, { $addToSet: { items: items[0] } }, { new: true })
            .populate('userId')
            .populate('items.productId');
        return result;
    });
};
exports.Cart = (0, mongoose_1.model)('Cart', cartSchema);
