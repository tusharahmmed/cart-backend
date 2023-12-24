"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.get('/:id', product_controller_1.ProductController.getSingleProduct);
router.get('/', product_controller_1.ProductController.getAllProduct);
exports.ProductRoutes = router;
