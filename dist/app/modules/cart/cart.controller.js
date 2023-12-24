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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = require("../../../shared/sendResponse");
const cart_service_1 = require("./cart.service");
// create new
const createNewCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield cart_service_1.CartService.createNewCart(payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Cart created successfully',
        data: result,
    });
}));
// get by user id
const getCartByUserID = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { _id } = req.user;
    // chekck requested user
    if (id !== _id) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
    }
    const result = yield cart_service_1.CartService.getCartByUserID(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Cart retrived successfully',
        data: result,
    });
}));
// delete by user id
const deleteCartByUserID = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { _id } = req.user;
    // chekck requested user
    if (id !== _id) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
    }
    const result = yield cart_service_1.CartService.deleteCartByUserID(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'cart deleted successfully',
        data: result,
    });
}));
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
const removeItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const payload = req.body;
    const { _id } = req.user;
    // chekck requested user
    if (id !== _id) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
    }
    const result = yield cart_service_1.CartService.removeItem(id, payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'cart item removed successfully',
        data: result,
    });
}));
exports.CartController = {
    createNewCart,
    getCartByUserID,
    deleteCartByUserID,
    //   updateStatus,
    removeItem,
};
