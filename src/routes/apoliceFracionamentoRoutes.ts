import 'reflect-metadata';
import Container from "typedi";
import { Router } from "express";
import ApoliceFracionamentoService from '../services/ApoliceFracionamentoService';
import ApoliceFracionamentoController from '../controllers/ApoliceFracionamentoController';

const apoliceFracService: ApoliceFracionamentoService = Container.get(ApoliceFracionamentoService);
const apoliceFracionamentoController:ApoliceFracionamentoController = new ApoliceFracionamentoController(apoliceFracService);
const apoliceFracionamentoRoutes = Router();

apoliceFracionamentoRoutes.get('/apolice_fracionamento/', apoliceFracionamentoController.getAll.bind(apoliceFracionamentoController));
apoliceFracionamentoRoutes.get('/apolice_fracionamento/:id', apoliceFracionamentoController.getByID.bind(apoliceFracionamentoController));
apoliceFracionamentoRoutes.post('/apolice_fracionamento/', apoliceFracionamentoController.criar.bind(apoliceFracionamentoController));
apoliceFracionamentoRoutes.put('/apolice_fracionamento/', apoliceFracionamentoController.actualizar.bind(apoliceFracionamentoController));
apoliceFracionamentoRoutes.delete('/apolice_fracionamento/:id', apoliceFracionamentoController.remover.bind(apoliceFracionamentoController));

export default apoliceFracionamentoRoutes;