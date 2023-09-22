import 'reflect-metadata';
import Container from "typedi";
import { Router } from "express";
import VeiculoController from "../controllers/VeiculoController";
import VeiculoService from '../services/VeiculoService';

const veiculoService: VeiculoService = Container.get(VeiculoService);
const veiculoController: VeiculoController = new VeiculoController(veiculoService);

const veiculoRoutes = Router();

veiculoRoutes.get('/veiculo/', veiculoController.getAll.bind(veiculoController));
veiculoRoutes.get('/veiculo/:id', veiculoController.getByID.bind(veiculoController));
veiculoRoutes.get('/veiculo/matricula/:matricula', veiculoController.getByMatricula.bind(veiculoController));

veiculoRoutes.post('/veiculo/', veiculoController.criar.bind(veiculoController));
veiculoRoutes.put('/veiculo/', veiculoController.actualizar.bind(veiculoController));
veiculoRoutes.delete('/veiculo/:id', veiculoController.remover.bind(veiculoController));

export default veiculoRoutes;
