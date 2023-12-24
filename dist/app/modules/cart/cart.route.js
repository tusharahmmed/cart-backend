"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoutes = void 0;
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const validateZod_1 = require("../../middlewares/validateZod");
const cart_controller_1 = require("./cart.controller");
const cart_validation_1 = require("./cart.validation");
const router = (0, express_1.Router)();
router.post('/add-new', (0, validateZod_1.validateZod)(cart_validation_1.CartValidation.createCartZodSchama), (0, auth_1.auth)(), cart_controller_1.CartController.createNewCart);
router.patch('/remove/:id', (0, validateZod_1.validateZod)(cart_validation_1.CartValidation.removeItemCartZodSchama), (0, auth_1.auth)(), cart_controller_1.CartController.removeItem);
// router.patch(
//   '/:id',
//   validateZod(WishListValidation.changeStatusWishListZodSchama),
//   auth(),
//   WishListController.updateStatus,
// );
router.delete('/:id', auth_1.auth, cart_controller_1.CartController.deleteCartByUserID);
router.get('/:id', (0, auth_1.auth)(), cart_controller_1.CartController.getCartByUserID);
exports.CartRoutes = router;
