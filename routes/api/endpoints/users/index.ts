import { Router } from 'express';
import { getController, postController, putController, deleteController } from './controllers';

const router = Router();

router.route('/')
  .get(getController)
  .post(postController)
  .put(putController)
  .delete(deleteController);

export default router;
