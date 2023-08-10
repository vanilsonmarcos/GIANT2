import express, { Application, Request, Response } from "express";
import PORT from "./port.ts";


const APP: Application = express();

APP.use("/", (req: Request, res: Response) => {
    res.send("REQUEST SENT SUCCESSFULLY");
});

APP.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});

export default APP;

