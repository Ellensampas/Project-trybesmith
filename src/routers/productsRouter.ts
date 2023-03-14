import express from 'express';
import controllerProducts from '../controllers/productsController';

const router = express.Router();

router.post('/', controllerProducts.addProducts);
router.get('/', controllerProducts.getProducts);

export default router;