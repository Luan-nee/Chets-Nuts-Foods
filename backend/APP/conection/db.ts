//import { createPool, FieldPacket, QueryResult } from "mysql2/promise";
//import { Pool } from "pg";
import {createPool} from "mysql2"

export interface connecionLocal {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

export interface Consultas {
  query: string;
  valores?: any[] | [[]];
  mensaje?: string;
}

export interface connecionRed {
  connectionString: string;
}

export type connectionDB = "mysql" | "pg";

export class BDconnection {
  tipo: connectionDB = "pg";
  pool: any;
  private connection: connecionLocal | connecionRed;

  constructor(bd: connectionDB, datos: connecionLocal | connecionRed) {
    this.tipo = bd;
    this.connection = datos;
  }

  private connecionMyql() {
    if ("connectionString" in this.connection)
      throw new Error("La conexion mysql no tiene una conexion de red");
    const pool = createPool({
      host: this.connection.host,
      port: this.connection.port,
      database: this.connection.database,
      user: this.connection.user,
      password: this.connection.password,
    });
    return pool;
  }

  /*private connectionPG() {
    try {
      if ("connectionString" in this.connection) {
        console.log("conexion en linea");
        return new Pool({
          connectionString: this.connection.connectionString,
          ssl: {
            rejectUnauthorized: false,
          },
        });
      }
      return new Pool({
        host: this.connection.host,
        port: this.connection.port,
        database: this.connection.database,
        user: this.connection.user,
        password: this.connection.password,
      });
    } catch (error) {
      console.error(
        "PostgreSQL driver not installed. Please run: npm install pg"
      );
    }
  }*/

  getPool() {
    if (this.tipo == "mysql") {
      this.pool = this.connecionMyql();
      return this.pool;
    }
    /*if (this.tipo == "pg") {
      this.pool = this.connectionPG();
      return this.pool;
    }*/
  }

  async executeConsulta({
    query,
    valores = undefined,
    mensaje,
  }: Consultas): Promise<any> {
    try {
      if (this.tipo === "mysql") {
        const respuesta = ["1"]; //await //this.connecionMyql().query(query, valores);
        return respuesta;
      } 
      /*else if (this.tipo === "pg") {
        let query2 = query;
        if (valores) {
          let iterador = 1;
          query2 = "";
          for (let i = 0; i < query.length; i++) {
            if (query[i] == "?") {
              query2 += `$${iterador}`;
              iterador++;
            } else {
              query2 += query[i];
            }
          }
        }
        console.log(query2);
        console.log(valores);
        const respuesta = await this.connectionPG()?.query(query2, valores);
        if (!respuesta) {
          throw new Error(` Este usuario no esta registrado `);
        }
        if ("rows" in respuesta) {
          if (respuesta.rows[0].id) {
            return { insertId: respuesta.rows[0].id };
          }
          return respuesta.rows;
        }
      }*/
    } catch (error) {
      console.log(error);
      if (typeof error === "object" && error !== null && "code" in error) {
        if (error.code === "ETIMEDOUT") {
          throw new Error(`Su red esta limitando el acceso`);
        }
        throw new Error(`${mensaje} : ${error} query ${query}`);
      }
    }
  }
}
