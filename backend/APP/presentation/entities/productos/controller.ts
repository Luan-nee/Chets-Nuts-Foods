import { Request, Response } from "express";
import { GetAllProductos } from "../../../domain/use-case/productos/getAllproductos.use-case";
import { CustomResponse } from "../../../core/res/custom.response";
import { handleError } from "../../../core/res/hanlde.error";

export class ProductosController {
  getAll = (req: Request, res: Response) => {
    const productos = new GetAllProductos();

    productos
      .execute()
      .then((producto) => {
        CustomResponse.success({ res, data: producto });
      })
      .catch((error) => {
        handleError(error, res);
      });
  };
}
