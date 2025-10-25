import poolObject from "../../db";

export type valor = "ASC" | "DESC";

export type Tipos = {
  [clave: string]: valor;
};

export class Select {
  private valores: boolean;
  private parametros: string[] | string;
  private tabla: string | undefined;
  private innerJoin: string[] | string;
  private leftjoins: string[] | string;
  private rigthjoins: string[] | string;
  private limit: string;
  private condicion: string;
  private orderBy: string;

  /**
   * @param {string[]} parametros - campo obligatorio
   * @param {string} tabla - nombre de la ta tabla - campo obligatorio
   * @param {string[]} values - campo obligatorio
   * @param {string} condition - tabla1.id = tabla2.idtabla1 - id='2' - id='2' AND id='3'
   */
  constructor(parametros: string[] | string = "*") {
    this.valores = !Array.isArray(parametros) ? false : true;
    this.parametros = parametros;
    this.tabla = undefined;
    this.innerJoin = "";
    this.leftjoins = "";
    this.rigthjoins = "";
    this.limit = "";
    this.condicion = "";
    this.orderBy = "";
  }
  /**
   * @param {string} tabla - nombre de la ta tabla - campo obligatorio
   */
  from(tabla: string) {
    if (!tabla || typeof tabla !== "string") {
      throw new Error("La tabla es un campo obligatorio");
    }
    this.tabla = tabla;
    return this;
  }

  innerJOIN(tabla: string, condition: string) {
    if (!tabla || typeof tabla !== "string") {
      throw new Error("La tabla es un campo obligatorio");
    }

    this.innerJoin += ` INNER JOIN ${tabla} ON ${condition}`;
    return this;
  }

  leftJoin(tabla: string, condition: string) {
    if (!tabla || typeof tabla !== "string") {
      throw new Error("La tabla es un campo obligatorio");
    }

    this.leftjoins += ` LEFT JOIN ${tabla} ON ${condition}`;
    return this;
  }

  rigthJoin(tabla: string, condition: string) {
    if (!tabla || typeof tabla !== "string") {
      throw new Error("La tabla es un campo obligatorio");
    }

    this.rigthjoins += ` RIGHT JOIN ${tabla} ON ${condition}`;
    return this;
  }
  /**
   * @param {string} condition - tabla1.id = tabla2.idtabla1 - id='2' - id='2' AND id='3'
   */
  where(condition: string | undefined = undefined) {
    if (condition === undefined || !condition) {
      this.condicion = "";
    } else {
      if (this.condicion.length < 2) {
        this.condicion += `WHERE `;
      }
      this.condicion += ` ${condition}`;
    }

    return this;
  }

  /**
   * @typedef { "ASC" | "DESC" } tipos
   */
  /**
   *
   * @param {{
   *  [clave:string]:tipos
   * }} objeto --Filtrado
   * @example
   * select().orderBy({nombre:'DESC',id:'ASC'});
   */

  OrderBy(objeto: Tipos) {
    if (typeof objeto !== "object")
      throw new Error("Solo se permite objetos , error de OrderBy");
    if (Object.keys(objeto).length === 0)
      throw new Error("No se permite los campos vacios");
    this.orderBy = " ORDER BY ";

    for (const [clave, valor] of Object.entries(objeto)) {
      if (valor !== "ASC" && valor !== "DESC")
        throw new Error("ASC o DESC requerido para la consulta");
      this.orderBy += ` ${clave} ${valor},`;
    }
    this.orderBy = this.orderBy.slice(0, -1);
    return this;
  }

  /**
   *
   * @param {Number} cantidad
   */
  LIMIT(cantidad: number = 1) {
    if (typeof cantidad != "number") {
      throw new Error("Cantidad tiene que ser un numero");
    }
    this.limit = `LIMIT ${cantidad}`;
    return this;
  }

  /**
   *
   * @param {String} texto
   */

  /**
   * @returns {Promise<Array<Object>>}
   */
  async execute() {
    let selectFields = "*";
    if (this.valores) {
      if (
        typeof this.parametros !== "undefined" &&
        typeof this.parametros !== "string"
      ) {
        selectFields = this.parametros.join(",");
      }
    }
    const query = `SELECT ${selectFields} from ${this.tabla} ${this.innerJoin} ${this.leftjoins} ${this.rigthjoins} ${this.condicion} ${this.orderBy}  ${this.limit};`;
    const respuesta = await poolObject.executeConsulta({
      query,
      mensaje: "Ocurrio un error realizar un select",
    });
    console.log(respuesta);
    return respuesta;
  }
}
