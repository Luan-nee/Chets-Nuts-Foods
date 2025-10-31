import { Router } from "express";
import { RoutesAuth } from "../presentation/auth/routes";
import { EntitiesRoutes } from "../presentation/entities/routes";
import { AuthMiddleware } from "../presentation/middleware/Auth.middleware";

export class ApiRoutes {
  static get routes() {
    const router = Router();
    //const auhtRouter = new RoutesAuth();

    router.use("/auth", RoutesAuth.router);

    /*router.use(
      [AuthMiddleware.request, AuthMiddleware.verifiAcceso],
      EntitiesRoutes.routes
    );*/
    //router.use(EntitiesRoutes.routes);

    return router;
  }
}
