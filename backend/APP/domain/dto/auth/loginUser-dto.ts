import { createSessionValidator } from "../../../validators/auth/sessionValidator";

export class LoginUserDTO {
  public clave: string;
  public id: number;

  private constructor({ clave, id }: LoginUserDTO) {
    this.clave = clave;
    this.id = id;
  }

  static createDirector(
    input: any
  ): [string | undefined, LoginUserDTO | undefined] {
    const result = createSessionValidator(input);

    if (!result.success) {
      return [result.error.message, undefined];
    }
    return [undefined, new LoginUserDTO(result.data)];
  }
}
