"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartValidation = void 0;
const zod_1 = require("zod");
const cart_constant_1 = require("./cart.constant");
const createCartZodSchama = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({ required_error: 'User Id is required' }),
        items: zod_1.z.array(zod_1.z.object({
            productId: zod_1.z.string({ required_error: 'Product id is required' }),
            color: zod_1.z.string({ required_error: 'Product color is required' }),
            quantity: zod_1.z.string({ required_error: 'Quantity is required' }),
            size: zod_1.z.enum([...cart_constant_1.ITEM_SIZE], {
                required_error: 'Product size is required',
            }),
        })),
    }),
});
const changeQuantityCartZodSchama = zod_1.z.object({
    body: zod_1.z.object({
        _id: zod_1.z.string({ required_error: '_id is required' }),
        productId: zod_1.z.string({ required_error: 'Product id is required' }),
        quantity: zod_1.z.number({ required_error: 'Product quantity is required' }),
    }),
});
const removeItemCartZodSchama = zod_1.z.object({
    body: zod_1.z.object({
        _id: zod_1.z.string({ required_error: '_id is required' }),
    }),
});
exports.CartValidation = {
    createCartZodSchama,
    changeQuantityCartZodSchama,
    removeItemCartZodSchama,
};
