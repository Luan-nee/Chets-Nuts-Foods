import { DeleteR } from "./middleware/delete";
import { QueryBuilder } from "./middleware/insertar";
import { Select } from "./middleware/select";
import { Update } from "./middleware/update";

export class DB {
  /**
   * @param {string} tabla - campo obligatorio
   * @param {string[]} parametros - campo obligatorio
   */
  static Insert(tabla: string, parametros: string[]) {
    // const [respuesta] = await pool.query(query,values)
    return new QueryBuilder(tabla, parametros);
  }
  /**
   * @param {string[]} parametros - campo opcional
   */
  static select(parametros?: string[]) {
    return new Select(parametros);
  }
  /**
   * @param {string} nombreTabla - nombre de la tabla a actualizar
   */
  static update(nombreTabla: string) {
    return new Update(nombreTabla);
  }

  /**
   *
   * @param {string} nombreTabla -- tabla a eliminar
   * @example
   * delete from tabla
   */
  static Delete(nombreTabla: string) {
    return new DeleteR(nombreTabla);
  }
}
