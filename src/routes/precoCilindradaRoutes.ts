import 'reflect-metadata';
import Container from "typedi";
import { Router } from "express";
import PrecoCilindradaController from "../controllers/PrecoCilindradaController";
import PrecoCilindradaService from '../services/PrecoCilindradaService';

const precoCilindradaService: PrecoCilindradaService = Container.get(PrecoCilindradaService);
const precoCilindradaController: PrecoCilindradaController = new PrecoCilindradaController(precoCilindradaService);

const precoCilindradaRoutes = Router();

/** Get person by it attributes */
precoCilindradaRoutes.get('/preco_cilindrada/', precoCilindradaController.getAll.bind(precoCilindradaController));
precoCilindradaRoutes.get('/preco_cilindrada/:id', precoCilindradaController.getByID.bind(precoCilindradaController));

precoCilindradaRoutes.post('/preco_cilindrada/', precoCilindradaController.criar.bind(precoCilindradaController));
precoCilindradaRoutes.put('/preco_cilindrada/', precoCilindradaController.actualizar.bind(precoCilindradaController));
precoCilindradaRoutes.delete('/preco_cilindrada/:id', precoCilindradaController.remover.bind(precoCilindradaController));

export default precoCilindradaRoutes;
