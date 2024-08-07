import { Router } from "express";
import geometryController from "../controllers/geometry.ctrl";

const router = Router();

/**
 * @swagger
 * /api/geometry/rectangle/isInside:
 *   post:
 *     tags:
 *       - Geometry
 *     summary: Get if point is inside rectangle
 *     description: Determine if a point is inside a rectangle, place the coordinates of the point(px,py) and the rectangle
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               px:
 *                 type: number
 *                 description: Point x
 *                 example: 1
 *               py:
 *                 type: number
 *                 description: Point y
 *                 example: 1
 *               x1:
 *                 type: number
 *                 description: Rectangle x1
 *                 example: 1
 *               y1:
 *                 type: number
 *                 description: Rectangle y1
 *                 example: 1
 *               x2:
 *                 type: number
 *                 description: Rectangle x2
 *                 example: 1
 *               y2:
 *                 type: number
 *                 description: Rectangle y2
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Successful response
 */
router.post("/rectangle/isInside", geometryController.isPointInsideRectangle);

/**
 * @swagger
 * /api/geometry/circle/isInside:
 *   post:
 *     tags:
 *       - Geometry
 *     summary: Get if point is inside circle
 *     description: Determine if a point is inside a circle, place the coordinates of the point(px,py) and the circle
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               px:
 *                 type: number
 *                 description: Point x
 *                 example: 1
 *               py:
 *                 type: number
 *                 description: Point y
 *                 example: 1
 *               cx:
 *                 type: number
 *                 description: Circle center x
 *                 example: 1
 *               cy:
 *                 type: number
 *                 description: Circle center y
 *                 example: 1
 *               radius:
 *                 type: number
 *                 description: Circle radius
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Successful response
 */

router.post("/circle/isInside", geometryController.isPointInsideCircle);
export default router;
