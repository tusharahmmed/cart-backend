import { Router } from 'express';
import { auth } from '../../middlewares/auth';
import { validateZod } from '../../middlewares/validateZod';
import { CartController } from './cart.controller';
import { CartValidation } from './cart.validation';

const router = Router();

router.post(
  '/add-new',
  validateZod(CartValidation.createCartZodSchama),
  auth(),
  CartController.createNewCart,
);

router.patch(
  '/remove/:id',
  validateZod(CartValidation.removeItemCartZodSchama),
  auth(),
  CartController.removeItem,
);

// router.patch(
//   '/:id',
//   validateZod(WishListValidation.changeStatusWishListZodSchama),
//   auth(),
//   WishListController.updateStatus,
// );

router.delete('/:id', auth, CartController.deleteCartByUserID);

router.get('/:id', auth(), CartController.getCartByUserID);

export const CartRoutes = router;
