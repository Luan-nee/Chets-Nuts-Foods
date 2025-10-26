import { DB } from "../../../conection/conexion";
import { eq } from "../../../conection/middleware/condicionals";

export class GetAllProductos {
  private async getProductos() {
    const result = await DB.select().from("productos");
    return result;
  }

  async execute() {
    return await this.getProductos();
  }
}
