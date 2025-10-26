import poolObject from "../../db";

export class DeleteR {
  #condicion;
  #tabla;

  /**
   *
   * @param {string} tabla -- tabla a eliminar
   * @example
   * delete from tabla
   */
  constructor(tabla: string) {
    this.#tabla = tabla;
    this.#condicion = "";
  }

  /**
   *
   * @param {string} condicion -- condicional de tabla
   * @example
   * DB.Delete(tabla).WHERE(eq(valor,valor))
   * DB.Delete(tabla).WHERE(AND(eq(valor,valor), eq(valor2,valor2)))
   */
  where(condicion: string) {
    if (!condicion || typeof condicion !== "string") {
      throw new Error("La tabla es un campo obligatorio");
    }
    this.#condicion = ` where ${condicion}`;
    return this;
  }

  async execute() {
    const query = `DELETE FROM ${this.#tabla} ${this.#condicion}`;
    const respuesta = await poolObject.executeConsulta({
      query,
      mensaje: "Ocurrio un error al momento de eliminar un dato",
    });
    return respuesta;
  }
}
