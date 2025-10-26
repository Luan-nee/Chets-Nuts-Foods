import express from "express";
import {RouterPrincipal} from "./routes/index.route"
const APP = express();
const rutas = new RouterPrincipal();

APP.use(express.json());
APP.use(rutas.router());

export default APP;
