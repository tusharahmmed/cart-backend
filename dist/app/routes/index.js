"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRoutes = void 0;
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const cart_route_1 = require("../modules/cart/cart.route");
const product_route_1 = require("../modules/product/product.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/products',
        route: product_route_1.ProductRoutes,
    },
    {
        path: '/cart',
        route: cart_route_1.CartRoutes,
    },
];
// use
moduleRoutes.forEach(module => {
    router.use(module.path, module.route);
});
exports.ApplicationRoutes = router;
