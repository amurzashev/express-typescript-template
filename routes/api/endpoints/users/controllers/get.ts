import { Request, Response } from 'express';
/**
 * @swagger
 * /users:
 *   get:
 *    tags:
 *    - "User"
 *    description: Creates new user
 */

export default (req: Request, res: Response) => {
  res.send('users GET OK!');
};
