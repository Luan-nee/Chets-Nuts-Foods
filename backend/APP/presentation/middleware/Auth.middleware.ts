import { NextFunction, Response } from "express";
import { CustomResponse } from "../../core/res/custom.response";

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
}
