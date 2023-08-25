import express, { Application, Request, Response } from "express";
import cors from 'cors';
import port from "./port";
import routes from "./routes";
import corsOptions from "./cors";

const app: Application = express();

/** Bootstrap application */
app.disable('x-powered-by');
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));


app.use("/", cors(corsOptions), routes);

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});

export default app;

