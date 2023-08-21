import { Router } from "express";
import CoberturaController from "../controllers/CoberturaController";


const coberturaController: CoberturaController = new CoberturaController();
const coberturaRoutes =  Router();

coberturaRoutes.get('/cobertura/', coberturaController.getAll)
coberturaRoutes.get('/cobertura/:id', coberturaController.getByID)
coberturaRoutes.post('/cobertura/', coberturaController.novaCobertura)
coberturaRoutes.put('/cobertura/', coberturaController.actualizarCobertura)
coberturaRoutes.delete('/cobertura/', coberturaController.removerCobertura)

export default coberturaRoutes;