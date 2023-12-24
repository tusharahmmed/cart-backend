import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CartRoutes } from '../modules/cart/cart.route';
import { ProductRoutes } from '../modules/product/product.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/cart',
    route: CartRoutes,
  },
];

// use
moduleRoutes.forEach(module => {
  router.use(module.path, module.route);
});

export const ApplicationRoutes = router;
