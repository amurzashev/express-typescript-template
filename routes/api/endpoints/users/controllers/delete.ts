import { Request, Response } from 'express';
/**
 * @swagger
 * /users:
 *   delete:
 *    tags:
 *    - "User"
 *    description: Creates new user
 */

export default (req: Request, res: Response) => {
  res.send('users DELETE OK!');
};
