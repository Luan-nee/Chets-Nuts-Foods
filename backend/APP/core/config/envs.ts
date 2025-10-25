import pkg from "env-var";
import { configDotenv } from "dotenv";

const { get } = pkg;
configDotenv();

export const envs = {
  ACCESS_TOKEN_DURATION: get("ACCESS_TOKEN_DURATION").required().asInt(),
  ACCESS_TOKEN_SECRET: get("ACCESS_TOKEN_SECRET").required().asString(),
  REFRESH_TOKEN_DURATION: get("REFRESH_TOKEN_DURATION")
    .default(60 * 60 * 24 * 7)
    .asIntPositive(),
  JWT_SEED: get("JWT_SEED").required().asString(),
  CLIENT_ID_GOOGLE: get("CLIENT_ID_GOOGLE").required().asString(),
  ID_PROYECT: get("ID_PROYECT").required().asString(),
  CLIENT_SECRET_GOOGLE: get("CLIENT_SECRET_GOOGLE").required().asString(),
  DB_HOST: get("DB_HOST").required().asString(),
  DB_PORT: get("DB_PORT").required().asString(),
  DB_DATABASE: get("DB_DATABASE").required().asString(),
  DB_USER: get("DB_USER").required().asString(),
  DB_PASS: get("DB_PASS").required().asString(),
};
