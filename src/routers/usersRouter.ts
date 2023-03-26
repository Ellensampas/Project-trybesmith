import express from 'express';
import controllerUsers from '../controllers/usersController';

const router = express.Router();

router.post('/', controllerUsers.addUsers);

export default router;