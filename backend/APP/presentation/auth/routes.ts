import { Router } from "express";
import ControllerAuth from "./controller";

export default class RoutesAuth {
  router() {
    const router = Router();
    const controller = new ControllerAuth();

    router.post("/director", controller.sessionDirector);
    router.post("/pruebadirector", controller.sessionGoogle);
    return router;
  }
}
