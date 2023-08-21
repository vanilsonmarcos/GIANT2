import { Router } from "express";
import PrecoCilindradaController from "../controllers/PrecoCilindradaController";
const precoCilindradaRoutes = Router();

const precoCilindradaController: PrecoCilindradaController = new PrecoCilindradaController();
/** Get person by it attributes */
precoCilindradaRoutes.get('/preco_cilindrada/', precoCilindradaController.getAll);
precoCilindradaRoutes.get('/preco_cilindrada/:id', precoCilindradaController.getByID);

precoCilindradaRoutes.post('/preco_cilindrada/', precoCilindradaController.novoPrecoCilindrada);
precoCilindradaRoutes.put('/preco_cilindrada/:id', precoCilindradaController.actualizarPrecoCilindrada);
precoCilindradaRoutes.delete('/preco_cilindrada/:id', precoCilindradaController.removerPrecoCilindrada);

export default precoCilindradaRoutes;
