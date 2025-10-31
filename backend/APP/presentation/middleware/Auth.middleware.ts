import { NextFunction, Request, Response } from "express";
import { CustomResponse } from "../../core/res/custom.response";
import { JWTadapter } from "../../core/config/AccessToken";

export class AuthMiddleware {
  private static handleAuthError(res: Response) {
    CustomResponse.unauthorized({ res, error: "El token esta caducado" });
  }

  private static handlerOuthLogin(res: Response) {
    CustomResponse.unauthorized({ res, error: "token Caducado" });
  }

  private static handleLogout(res: Response, errorMes: string) {
    CustomResponse.unauthorized({ res, message: errorMes });
  }

  static verifiAcceso = (req: Request, res: Response, nex: NextFunction) => {
    const id = req.authpayload;
  };

  static request = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    if (authHeader === undefined || typeof authHeader !== "string") {
      AuthMiddleware.handleAuthError(res);
      return;
    }
    const partes = authHeader.split(" ");

    if (partes.length !== 2 || partes[0] !== "bearer") {
      AuthMiddleware.handleAuthError(res);
      return;
    }

    const [, token] = partes;
    try {
      const decodeAuthpayload = JWTadapter.verifyToken({ token });

      const authpayload = decodeAuthpayload?.id;

      const tiempoActual = Math.floor(Date.now() / 1000);
      const tiempoRestante = decodeAuthpayload.exp - tiempoActual;
      req.authpayload = authpayload;
      req.tiempo = tiempoRestante;

      console.log("tiempo : " + req.tiempo + " cod : " + req.authpayload);

      if (req.authpayload === undefined || req.tiempo < 0) {
        return AuthMiddleware.#hanlerOutLogin(res);
      }

      next();
    } catch (error) {
      if (error instanceof pkg.JsonWebTokenError) {
        AuthMiddleware.#handleAuthError(res);
        return;
      }
      next(error);
    }
  };
}
