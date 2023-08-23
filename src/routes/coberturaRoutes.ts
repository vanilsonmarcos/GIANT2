import 'reflect-metadata';
import { Router } from "express";
import CoberturaController from "../controllers/CoberturaController";
import CoberturaService from "../services/CoberturaService";
import { Container } from "typedi";

const coberturaService: CoberturaService = Container.get(CoberturaService);
const coberturaController = new CoberturaController(coberturaService);
const coberturaRoutes =  Router();

coberturaRoutes.get('/cobertura/', coberturaController.getAll);
coberturaRoutes.get('/cobertura/:id', coberturaController.getByID);
coberturaRoutes.post('/cobertura/', coberturaController.novaCobertura);
coberturaRoutes.put('/cobertura/', coberturaController.actualizarCobertura);
coberturaRoutes.delete('/cobertura/', coberturaController.removerCobertura);

export default coberturaRoutes;