import { Router } from "express";
import PrecoCilindradaController from "../controllers/PrecoCilindradaController";
const precoCilindradaRoutes = Router();

const precoCilindradaController: PrecoCilindradaController = new PrecoCilindradaController();
/** Get person by it attributes */
precoCilindradaRoutes.get('/precocilindrada/', precoCilindradaController.getAll);
precoCilindradaRoutes.get('/precocilindrada/:id', precoCilindradaController.getByID);

precoCilindradaRoutes.post('/precocilindrada/', precoCilindradaController.novoPrecoCilindrada);
precoCilindradaRoutes.put('/precocilindrada/:id', precoCilindradaController.actualizarPrecoCilindrada);
precoCilindradaRoutes.delete('/precocilindrada/:id', precoCilindradaController.removerPrecoCilindrada);

export default precoCilindradaRoutes;
