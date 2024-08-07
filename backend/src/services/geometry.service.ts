type GetIsPointInsideRectangleParams = {
  px: number;
  py: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};
type GetIsPointInsideCircleParams = {
  px: number;
  py: number;
  cx: number;
  cy: number;
  radius: number;
};

class GeometryService {
  isPointInsideRectangle = ({
    px,
    py,
    x1,
    y1,
    x2,
    y2,
  }: GetIsPointInsideRectangleParams) => {
    return x1 <= px && px <= x2 && y1 <= py && py <= y2;
  };

  isPointInsideCircle = ({
    px,
    py,
    cx,
    cy,
    radius,
  }: GetIsPointInsideCircleParams) => {
    return Math.pow(px - cx, 2) + Math.pow(py - cy, 2) <= Math.pow(radius, 2);
  };
}

const geometryService = new GeometryService();

export default geometryService;
