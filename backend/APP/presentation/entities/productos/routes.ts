import { Router } from "express";
import { ProductosController } from "./controller";

export class ProductosRoutes {
  static get routes() {
    const router = Router();
    const productosController = new ProductosController();

    router.get("/", productosController.getAll);

    return router;
  }
}
