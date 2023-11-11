import 'reflect-metadata';
import Container from "typedi";
import { Router } from "express";

import ApoliceTipoService from '../services/ApoliceTipoService';
import ApoliceTipoController from '../controllers/ApoliceTipoController';

const apoliceTipoService: ApoliceTipoService = Container.get(ApoliceTipoService);
const apoliceTipoController:ApoliceTipoController = new ApoliceTipoController(apoliceTipoService);
const apoliceTipoRoutes = Router();

apoliceTipoRoutes.get('/apolice_tipo/', apoliceTipoController.getAll.bind(apoliceTipoController));
apoliceTipoRoutes.get('/apolice_tipo/:id', apoliceTipoController.getByID.bind(apoliceTipoController));
apoliceTipoRoutes.post('/apolice_tipo/', apoliceTipoController.criar.bind(apoliceTipoController));
apoliceTipoRoutes.put('/apolice_tipo/', apoliceTipoController.actualizar.bind(apoliceTipoController));
apoliceTipoRoutes.delete('/apolice_tipo/:id', apoliceTipoController.remover.bind(apoliceTipoController));

export default apoliceTipoRoutes;