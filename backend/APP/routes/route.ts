import { Request, Response, Router } from "express";

export class RouterPrincipal {
  router() {
    const router = Router();

    router.use("/",(req:Request,res:Response)=>{
        res.send("WELCOME PAGE 0");
    });

    return router;
  }
}
