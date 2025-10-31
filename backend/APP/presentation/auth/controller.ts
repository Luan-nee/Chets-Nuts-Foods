import { Request, Response } from "express";
import { LoginUserDTO } from "../../domain/dto/auth/loginUser-dto";
import { CustomResponse } from "../../core/res/custom.response";
import SessionUseCase from "../../domain/use-case/Auth/sessionUse-case";
import { handleError } from "../../core/res/hanlde.error";
import { googleSecions } from "../../core/core";

export default class ControllerAuth {
  sessionMain(req: Request, res: Response) {
    const [error, loginMain] = LoginUserDTO.createSessionUserMain(req.body);

    if (error !== undefined || loginMain === undefined) {
      return CustomResponse.badRequest({ res, error: "Datos incorrectos" });
    }

    const userControl = new SessionUseCase();

    userControl
      .sessionUserMain(loginMain)
      .then((response) => {
        CustomResponse.success({ res, data: response });
      })
      .catch((error) => {
        console.log(error);
        handleError(error, res);
      });
  }
  sessionGoogle(req: Request, res: Response) {
    const data1 = req.body;

    if (!data1 || !data1.correo) {
      handleError("Este correo no exite", res);
      return;
    }
    const correo = data1.correo || null;
    console.log(correo);
    if (!correo) {
      handleError("no existe", res);
      return;
    }

    const userControl = new SessionUseCase();
    const data = {
      correo,
      refreshToken: "naefianfoeaodwajeoiajdlkwdjaoeifaksfoiw",
      token: "fmawkadwpodawpaklflaknfla",
    };
    userControl
      .sessionDirectorGoogle(data)
      .then((response) => {
        CustomResponse.success({ res, data: response });
      })
      .catch((error) => {
        console.log(error);
        handleError(error, res);
      });
  }
}
