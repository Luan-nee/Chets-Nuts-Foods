import { Router } from "express";
import { ProductosRoutes } from "./productos/routes";

export class EntitiesRoutes {
  static get routes() {
    const router = Router();

    router.use("/productos", ProductosRoutes.routes);

    return router;
  }
}
