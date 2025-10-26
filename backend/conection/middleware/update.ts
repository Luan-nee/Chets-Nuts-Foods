import poolObject from "../../db";
import { eq } from "./condicionals";

export type Valores = Record<string, string | number | undefined>;

export class Update {
  nombreTabla = "";
  valores: string = "";
  condicion: string = "";

  /**
   * @param {string} nombreTabla - nombre de la tabla a actualizar
   */
  constructor(nombreTabla: string) {
    if (typeof nombreTabla !== "string") {
      throw new Error("el valor ingresado requiere un string");
    }
    if (nombreTabla === undefined || !nombreTabla) {
      throw new Error("El nombre de la tabla es requerido");
    }
    this.nombreTabla = nombreTabla;
  }

  /**
   * @param {Object} valores - valores a actualizar
   */

  set(valores: Valores) {
    if (typeof valores !== "object") {
      throw new Error("es requerido un objeto");
    }
    let valor = "";
    for (const key in valores) {
      if (valores.hasOwnProperty(key)) {
        const value = valores[key];
        if (value === undefined) continue;
        valor += eq(key, value);
        valor += ",";
      }
    }
    valor = valor.slice(0, -1);
    this.valores = valor;
    return this;
  }

  /**
   * @param {string} condicion - valor condicional
   */

  where(condicion: string) {
    if (condicion === undefined || !condicion) {
      this.condicion = "";
    } else {
      if (this.condicion.length < 2) {
        this.condicion += `WHERE `;
      }
      this.condicion += `${condicion}`;
    }
    return this;
  }

  async execute() {
    const query = `UPDATE ${this.nombreTabla} SET ${this.valores} ${this.condicion};`;
    const [respuesta] = await poolObject.executeConsulta({
      query,
      mensaje: "Error Update",
    });
    if (poolObject.tipo === "mysql") {
      return respuesta;
    } else {
      return {
        resultado: respuesta.rows.info,
        filasAfectadas: respuesta.rows.affectedRows,
      };
    }
  }
}
