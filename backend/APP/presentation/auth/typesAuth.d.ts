export type roles = "admin" | "operario" | "transportista";

export interface Usuarios {
  id: number;
  correo: string;
  contra: string;
  refreshToken: null | string;
  rol: roles;
  estado: "activo" | "inactivo";
}
