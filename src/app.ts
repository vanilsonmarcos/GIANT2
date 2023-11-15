import express, { Application, Request, Response } from "express";
// import helmet from "helmet";
import cors from 'cors';
import routes from "./routes";
import corsOptions from "../cors";

const app: Application = express();

/** Bootstrap application */
app.disable('x-powered-by')
// app.use(helmet());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use("/", cors(corsOptions), routes);

app.get('/', (req: Request, res: Response): void => {
    res.send('API - Seguradora - Typescript with Node.js!');
});


export default app;