import express, { Application, Request, Response } from "express";
import port from "./port";


const app: Application = express();

/** Bootstrap application */
app.disable('x-powered-by');
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));


app.use("/", (req: Request, res: Response) => {
    res.send("REQUEST SENT SUCCESSFULLY");
});

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});

export default app;

