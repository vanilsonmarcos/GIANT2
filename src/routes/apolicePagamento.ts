import { Router } from "express";

import ApoliceController from "../controllers/ApoliceController";
import ApolicePagamentoConttroller from "../controllers/ApolicePagamentoController";

const apolicePagamentoRoutes = Router();

const apolicePgamanetoController:ApolicePagamentoConttroller = new ApolicePagamentoConttroller();
const routeName:String = "apolicepagamento"; 

apolicePagamentoRoutes.get(`/${routeName}/`, apolicePgamanetoController.getAllApolicePagamentoByApoliceID);
apolicePagamentoRoutes.get(`/${routeName}/:id`, apolicePgamanetoController.getApolicePagamentoByApoliceID);
apolicePagamentoRoutes.post(`/${routeName}/`, apolicePgamanetoController.addApolicePagamentoByApoliceID);




export default apolicePagamentoRoutes;