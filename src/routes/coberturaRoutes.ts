import 'reflect-metadata';
import { Router } from "express";
import CoberturaController from "../controllers/CoberturaController";
import CoberturaService from "../services/CoberturaService";
import { Container } from "typedi";

const coberturaService: CoberturaService = Container.get(CoberturaService);
const coberturaController = new CoberturaController(coberturaService);
const coberturaRoutes =  Router();

coberturaRoutes.get('/cobertura/', coberturaController.getAll.bind(coberturaController));
coberturaRoutes.get('/cobertura/:id', coberturaController.getByID.bind(coberturaController));
coberturaRoutes.post('/cobertura/', coberturaController.criar.bind(coberturaController));
coberturaRoutes.put('/cobertura/', coberturaController.actualizar.bind(coberturaController));
coberturaRoutes.delete('/cobertura/:id', coberturaController.remover.bind(coberturaController));

export default coberturaRoutes;