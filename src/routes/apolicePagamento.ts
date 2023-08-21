import { Router } from "express";

import ApolicePagamentoConttroller from "../controllers/ApolicePagamentoController";

const apolicePagamentoRoutes = Router();

const apolicePagamentoController:ApolicePagamentoConttroller = new ApolicePagamentoConttroller();
const routeName:String = "apolice_pagamento"; 

apolicePagamentoRoutes.get("/apolice_pagamento/:id", apolicePagamentoController.getApolicePagamentoByID);
apolicePagamentoRoutes.get("/apolice_pagamento/apolice/:id", apolicePagamentoController.getAllApolicePagamentoByApoliceID);
apolicePagamentoRoutes.post("/apolice_pagamento/", apolicePagamentoController.addApolicePagamentoByApoliceID);




export default apolicePagamentoRoutes;