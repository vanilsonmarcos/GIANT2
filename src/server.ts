import http from 'http';
import APP from './app'

const httpServer = http.createServer(APP);

export default httpServer;
