import { Request, Response } from 'express';
/**
 * @swagger
 * /users:
 *   put:
 *    tags:
 *    - "User"
 *    description: Creates new user
 */

export default (req: Request, res: Response) => {
  res.send('users PUT OK!');
};
