import { createSessionValidator } from "../../../validators/auth/sessionValidator";

export class LoginUserDTO {
  public clave: string;
  public usuario: string;

  private constructor({ clave, usuario }: LoginUserDTO) {
    this.clave = clave;
    this.usuario = usuario;
  }

  static createSessionUserMain(
    input: any
  ): [string | undefined, LoginUserDTO | undefined] {
    const result = createSessionValidator(input);

    if (!result.success) {
      return [result.error.message, undefined];
    }
    return [undefined, new LoginUserDTO(result.data)];
  }
}
