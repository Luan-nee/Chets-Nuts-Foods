export interface Authpayload {
  id: number;
}

declare global {
  namespace Express {
    interface Request {
      authpayload?: Authpayload;
    }
  }
}

export {};
