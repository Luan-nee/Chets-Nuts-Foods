import { DB } from "../../../conection/conexion";
import { AND, eq } from "../../../conection/middleware/condicionals";
import { JWTadapter } from "../../../core/config/AccessToken";
import { googleSecions } from "../../../core/core";
import { CustomError } from "../../../core/res/Custom.error";
import { LoginUserDTO } from "../../dto/auth/loginUser-dto";

export interface responseUser {
  id: number;
  nombre: string;
  estado: boolean;
  tipo: string;
}

export default class SessionUseCase {
  async sessionDirector(data: LoginUserDTO) {
    const resultado = await DB.select(["clave"])
      .from("claves2A")
      .where(AND(eq("clave", data.clave) /*,eq("idUser", data.id)*/))
      .execute();
    console.log(resultado);

    //JWTadapter.createAccessToken({ payload: { id: data.id } });
    return resultado;
  }

  async sessionUserMain(data: LoginUserDTO) {
    const resultado = await DB.select()
      .from("usuarios")
      .where(AND(eq("correo", data.usuario), eq("contra", data.clave)))
      .execute();

    console.log(resultado);
    return resultado;
  }

  async sessionDirectorGoogle(data: googleSecions) {
    const [user]: responseUser[] = await DB.select([
      "usuarios.id",
      "usuarios.nombre",
      "usuarios.estado",
      "tipo_usuarios.nombre as tipo",
    ])
      .from("usuarios")
      .where(eq("correo", data.correo))
      .innerJOIN(
        "tipo_usuarios",
        eq("usuarios.id_tipo", "tipo_usuarios.id", false)
      )
      .execute();

    if (!user || user === undefined) {
      throw CustomError.badRequest("Usuario no registrado ");
    }

    if (user.tipo.toLocaleLowerCase() !== "director") {
      throw CustomError.badRequest("No tienes permisos para acceder aqui");
    }

    if (!user.tipo) {
      throw CustomError.badRequest("Su cuenta se encuentra INACTIVA");
    }

    const idSecion = await DB.Insert("sessiones", [
      "id_user",
      "tokengoogle",
      "refreshtokengoogle",
    ])
      .Values([user.id, data.token, data.refreshToken])
      .execute();

    const datos = {
      usuario: user.nombre,
      idSecion,
    };

    return datos;
  }
}
