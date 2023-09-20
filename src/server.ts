import "reflect-metadata";
import http from 'http';
import app from './app'
import port from "./port";

const httpServer = http.createServer(app);

httpServer.listen(port, () => {});

export default httpServer;
