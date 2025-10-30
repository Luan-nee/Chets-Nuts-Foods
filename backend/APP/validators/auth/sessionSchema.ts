import z from "zod";

export const sessionDirector = {
  codigo: z.string().trim().max(10).min(2),
  usuario: z.string().min(1).email("this is not valid correo"),
};
