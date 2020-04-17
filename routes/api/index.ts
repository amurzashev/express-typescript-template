import { Router } from 'express';
import { users } from './endpoints';

const router = Router();

router.use('/users', users);

export default router;
