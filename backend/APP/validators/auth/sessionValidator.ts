import z from "zod";
import { sessionDirector } from "./sessionSchema";

const createSchemaSessionDirector = z.object({
  clave: sessionDirector.codigo,
  usuario: sessionDirector.usuario,
});

export const createSessionValidator = (objeto: unknown) =>
  createSchemaSessionDirector.safeParse(objeto);
