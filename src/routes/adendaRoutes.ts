import 'reflect-metadata';
import Container from "typedi";
import { Router } from "express";
import AdendaService from '../services/AdendaService';
import AdendaController from '../controllers/AdendaController';

const adendaService: AdendaService = Container.get(AdendaService);
const adendaController: AdendaController = new AdendaController(adendaService);
const adendaRoutes = Router();

adendaRoutes.get('/adenda/apolice/:id', adendaController.getByApoliceID.bind(adendaController));
adendaRoutes.get('/adenda/segurados/:id', adendaController.getSeguradosByAdendaID.bind(adendaController));
adendaRoutes.get('/adenda/veiculos/:id', adendaController.getVeiculosByAdendaID.bind(adendaController));
adendaRoutes.get('/adenda/', adendaController.getAll.bind(adendaController));
adendaRoutes.get('/adenda/:id', adendaController.getByID.bind(adendaController));
adendaRoutes.post('/adenda/', adendaController.criar.bind(adendaController));
adendaRoutes.put('/adenda/', adendaController.actualizar.bind(adendaController));
adendaRoutes.delete('/adenda/:id', adendaController.remover.bind(adendaController));

adendaRoutes.post('/adenda/segurados', adendaController.adicionarSegurados.bind(adendaController));
adendaRoutes.post('/adenda/veiculos', adendaController.adicionarItemsSegurado.bind(adendaController));
adendaRoutes.post('/adenda/calcular_premio', adendaController.calculatePremio.bind(adendaController));


export default adendaRoutes;