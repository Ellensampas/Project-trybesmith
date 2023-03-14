import express from 'express';
import controllerProducts from '../controllers/productsController';

const router = express.Router();

router.post('/', controllerProducts.addProducts);

export default router;