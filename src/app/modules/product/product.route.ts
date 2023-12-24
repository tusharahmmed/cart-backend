import { Router } from 'express';
import { ProductController } from './product.controller';

const router = Router();

router.get('/:id', ProductController.getSingleProduct);
router.get('/', ProductController.getAllProduct);

export const ProductRoutes = router;
