export interface Authpayload {
  id: number;
}

declare global {
  namespace Express {
    export interface Request {
      authpayload?: Authpayload;
    }
  }
}
