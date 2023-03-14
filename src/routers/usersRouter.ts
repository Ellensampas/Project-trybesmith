import express from 'express';
import controllerUsers from '../controllers/usersController';

const router = express.Router();

router.post('/', controllerUsers.addUsers);
// router.get('/', controllerProducts.getProducts);

export default router;