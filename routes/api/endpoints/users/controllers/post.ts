import { Request, Response } from 'express';
/**
 * @swagger
 * /users:
 *   post:
 *    tags:
 *    - "User"
 *    description: Creates new user
 */

export default (req: Request, res: Response) => {
  res.send('users POST OK!');
};
