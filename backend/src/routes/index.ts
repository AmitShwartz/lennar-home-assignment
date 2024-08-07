import express from "express";
import geometryRouter from "./geometry.route";

const router = express.Router();

const allRoutes = [
  {
    path: "/geometry",
    route: geometryRouter,
  },
];
allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
