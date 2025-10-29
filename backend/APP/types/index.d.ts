interface Authpayload {
  id: number;
}

declare namespace Express {
  export interface Request {
    authpayload?: Authpayload;
  }
}
