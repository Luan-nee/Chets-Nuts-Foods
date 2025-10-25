import { BDconnection, connecionLocal } from "./conection/db";
import { envs } from "./core/config/envs";

const { DB_HOST,DB_PORT,DB_DATABASE,DB_USER,DB_PASS } = envs;

/*const requrimientos: connecionRed = {
  connectionString: DB_CONNECTION,
};*/

const requrimientos: connecionLocal = {
  host: DB_HOST,
  port: Number(DB_PORT),
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASS,
};

const poolObject = new BDconnection("mysql", requrimientos);

export default poolObject;
