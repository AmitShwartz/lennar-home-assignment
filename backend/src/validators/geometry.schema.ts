import { z } from "zod";

export const IsPointInsideRectangleBodySchema = z.object({
  px: z.number(),
  py: z.number(),
  x1: z.number(),
  y1: z.number(),
  x2: z.number(),
  y2: z.number(),
});

export const IsPointInsideCircleBodySchema = z.object({
  px: z.number(),
  py: z.number(),
  cx: z.number(),
  cy: z.number(),
  radius: z.number(),
});
