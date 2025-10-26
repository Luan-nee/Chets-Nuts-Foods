import { Router } from "express";
import { RoutesAuth } from "../presentation/auth/routes";
import { EntitiesRoutes } from "../presentation/entities/routes.js";
import { AuthMiddleware } from "../";

export class ApiRoutes {
  static get routes() {
    const router = Router();
    const auhtRouter = new RoutesAuth();

    router.use("/auth", auhtRouter.router);

    router.use(
      [AuthMiddleware.request, AuthMiddleware.verifyAcceso],
      EntitiesRoutes.routes
    );
    //router.use(EntitiesRoutes.routes);

    return router;
  }
}
