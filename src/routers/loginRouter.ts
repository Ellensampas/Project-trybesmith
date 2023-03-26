import express from 'express';
import controllerLogin from '../controllers/loginController';
import loginValidat from '../middlewares/loginValidat';

const router = express.Router();

router.post('/', loginValidat, controllerLogin.logs);

export default router;