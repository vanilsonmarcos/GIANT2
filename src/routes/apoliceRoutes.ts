import 'reflect-metadata';
import Container from "typedi";
import { Router } from "express";
import ApoliceService from '../services/ApoliceService';
import ApoliceController from '../controllers/ApoliceController';

const apoliceService: ApoliceService = Container.get(ApoliceService);
const apoliceController:ApoliceController = new ApoliceController(apoliceService);
const apoliceRoutes = Router();

apoliceRoutes.get('/apolice/', apoliceController.getAll.bind(apoliceController));

apoliceRoutes.get('/apolice/estado/', apoliceController.getAllApoliceEstado.bind(apoliceController));
apoliceRoutes.get('/apolice/:id', apoliceController.getByID.bind(apoliceController));
apoliceRoutes.post('/apolice/', apoliceController.criar.bind(apoliceController));
apoliceRoutes.put('/apolice/', apoliceController.actualizar.bind(apoliceController));
apoliceRoutes.delete('/apolice/:id', apoliceController.remover.bind(apoliceController));


export default apoliceRoutes;