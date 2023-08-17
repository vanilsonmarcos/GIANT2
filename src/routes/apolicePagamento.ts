import { Router } from "express";

import ApoliceController from "../controllers/ApoliceController";

const apolicePagamentoRoutes = Router();

const apoliceController:ApoliceController = new ApoliceController();
const routeName:String = "apolicepagamento"; 

apolicePagamentoRoutes.get(`/${routeName}/`, apoliceController.);
apolicePagamentoRoutes.get(`/${routeName}/:id`, apoliceController.getApoliceByID);
apolicePagamentoRoutes.post(`/${routeName}/`, apoliceController.criarApolice);
apolicePagamentoRoutes.put(`/${routeName}/`, apoliceController.actualizarApolice);
apolicePagamentoRoutes.delete(`/${routeName}/:id`, apoliceController.removerApolice);



export default apolicePagamentoRoutes;