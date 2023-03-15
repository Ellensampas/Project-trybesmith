import express from 'express';
import controllerOrders from '../controllers/ordersController';

const router = express.Router();

router.get('/', controllerOrders.getOrders);

export default router;