import { Request, Response } from "express";
import geometryService from "../services/geometry.service";
import { InternalServerError, handleZodError } from "../utils/ApiError";
import { asyncWrapper } from "../utils/asyncWrapper";
import {
  IsPointInsideCircleBodySchema,
  IsPointInsideRectangleBodySchema,
} from "../validators/geometry.schema";

class GeometryController {
  isPointInsideRectangle = asyncWrapper(async (req: Request, res: Response) => {
    try {
      // validate and parse body parameters
      const body = IsPointInsideRectangleBodySchema.parse(req.body);

      const isInside = geometryService.isPointInsideRectangle(body);
      return res.status(200).json({ isInside });
    } catch (error) {
      handleZodError(error);
      throw new InternalServerError(error);
    }
  });

  isPointInsideCircle = asyncWrapper(async (req: Request, res: Response) => {
    try {
      // validate and parse body parameters
      const body = IsPointInsideCircleBodySchema.parse(req.body);

      const isInside = geometryService.isPointInsideCircle(body);

      return res.status(200).json({ isInside });
    } catch (error) {
      handleZodError(error);
      throw new InternalServerError(error);
    }
  });
}

const geometryController = new GeometryController();

export default geometryController;
