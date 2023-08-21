import { Router } from "express";
import CoberturaController from "../controllers/CoberturaController";
import CoberturaRepository from "../repositories/mysql/CoberturaRepository";


const cobertura = new CoberturaRepository();

const coberturaController = new CoberturaController(cobertura);
const coberturaRoutes =  Router();

coberturaRoutes.get('/cobertura/', coberturaController.getAll)
coberturaRoutes.get('/cobertura/:id', coberturaController.getByID)
coberturaRoutes.post('/cobertura/', coberturaController.novaCobertura)
coberturaRoutes.put('/cobertura/', coberturaController.actualizarCobertura)
coberturaRoutes.delete('/cobertura/', coberturaController.removerCobertura)

export default coberturaRoutes;