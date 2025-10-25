import { ResponseStatus } from "../../consts";
import { ResponseStatusType } from "../core";

interface CustomErrorConstructor {
  statusCode: number;
  message: string;
  status: ResponseStatusType;
  data?: any;
}

export class CustomError extends Error {
  public readonly statusCode: number;
  public readonly message: string;
  public readonly status: ResponseStatusType;
  public readonly data?: any;

  constructor({ statusCode, message, status, data }: CustomErrorConstructor) {
    super(message);
    this.statusCode = statusCode;
    this.status = status;
    this.message = message;
    this.data = data;
  }

  static badRequest(message: string) {
    return new CustomError({
      statusCode: 400,
      message,
      status: ResponseStatus.fail,
    });
  }
}
