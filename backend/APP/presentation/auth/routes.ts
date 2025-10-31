import { Router } from "express";
import ControllerAuth from "./controller";

export class RoutesAuth {
  router() {
    const router = Router();
    const controller = new ControllerAuth();

    router.post("/session", controller.sessionMain);
    router.post("/pruebadirector", controller.sessionGoogle);
    return router;
  }
}
