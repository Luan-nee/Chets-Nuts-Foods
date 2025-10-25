import poolObject from "../../db";

export type arrayData = (string | number)[];
export type arrayDatas = (string | number)[][];

export class QueryBuilder {
  private tabla: string;
  private parametros: string[] | string;
  private valores: any[];
  private valorRetorno: any;
  /**
   * @throws {Error} Si la consulta es vacía.
   */
  /**
   * @param {string[]} parametros - campo obligatorio
   * @param {string} tabla - nombre de la ta tabla - campo obligatorio
   * @param {string[]} values - campo obligatorio
   */

  constructor(tabla: string, parametros: string[]) {
    if (!parametros || !Array.isArray(parametros)) {
      throw new Error(`campos obligatorios`);
    }
    if (!tabla || typeof tabla !== "string") {
      throw new Error("Nombre tabla obligatorio");
    }
    this.tabla = tabla;
    this.parametros = parametros;
    this.valores = [];
    this.valorRetorno = null;
  }

  Values(values: arrayData | arrayDatas) {
    if (!values || !Array.isArray(values)) {
      throw new Error("los valores tienen que ser tipo array");
    }
    this.valores = values;
    return this;
  }

  async execute() {
    this.valorRetorno = 1;
    let query1 = `INSERT INTO ${this.tabla} `;
    let param = "";
    let arrayArrays = false;
    let paramespaces = "";
    if (typeof this.parametros !== "string") {
      this.parametros.forEach((valor, index) => {
        param += valor;
        if (Array.isArray(valor) && !arrayArrays) arrayArrays = true;
        paramespaces += ` ? `;
        if (index < this.parametros.length - 1) {
          param += ", ";
          paramespaces += ", ";
        }
      });
    }
    let query = `${query1} (${param}) VALUES `;
    if (arrayArrays) {
      query += ` ? `;
    } else {
      query += `(${paramespaces})`;
    }
    //console.log(query);
    //console.log(this.valores);
    const [respuesta] = await poolObject.executeConsulta({
      query,
      valores: this.valores,
      mensaje: `Ocurrio un error al ingresar datos a ${this.tabla} `,
    });
    return respuesta.insertId;
  }
}
