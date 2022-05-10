import { Router, Request, Response } from "express";
const router = Router();

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: gets posts by id
 *     tags: [Users]
 * 
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id of post
 *         schema:
 *           type: integer
 *         required: true
 * 
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *       400:
 *         description: User can not be found
 */


/**
 * @swagger
 * /balance:
 *   get:
 *     summary: gets posts by id
 *     tags: [Balance]
 * 
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *       400:
 *         description: User can not be found
 */

export default router;