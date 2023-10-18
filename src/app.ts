import express, { Application } from "express";
import helmet from "helmet";
import cors from 'cors';
import routes from "./routes";
import corsOptions from "../cors";

const app: Application = express();

/** Bootstrap application */
app.disable('x-powered-by')
app.use(helmet());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use("/", cors(corsOptions), routes);


export default app;