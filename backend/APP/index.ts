import http from "http";
import APP from "./app";
import { env } from "process";
import SocketControl from "./socketsControl";

const server = http.createServer(APP);
const PORT = env.port || 4000;

const httpServer = server.listen(PORT, () => {
  console.log(
    `\n ======== Servidor Z en linea ==========\n \t 
      http://localhost:${PORT}/
    \n ========================================`
  );
});

const socketsControl = new SocketControl(httpServer);
socketsControl.principalConection();
