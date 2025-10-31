import { Router } from "express";
import ControllerAuth from "./controller";

export class RoutesAuth {
  static get router() {
    const router = Router();
    const controller = new ControllerAuth();

    router.get("/session2", controller.sessionPrueba);

    router.post("/session", controller.sessionMain);
    router.post("/pruebadirector", controller.sessionGoogle);
    return router;
  }
}
