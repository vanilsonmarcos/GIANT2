import { Router } from "express";

import ApoliceController from "../controllers/ApoliceController";

const apoliceRoutes = Router();

const apoliceController:ApoliceController = new ApoliceController();

apoliceRoutes.get('/apolice/', apoliceController.getAllApolice);
apoliceRoutes.get('/apolice/:id', apoliceController.getApoliceByID);
apoliceRoutes.post('/apolice/', apoliceController.criarApolice);
apoliceRoutes.put('/apolice/', apoliceController.actualizarApolice);
apoliceRoutes.delete('/apolice/:id', apoliceController.removerApolice);


export default apoliceRoutes;