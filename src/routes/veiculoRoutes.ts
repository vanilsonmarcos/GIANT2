import { Router } from "express";
import VeiculoController from "../controllers/VeiculoController";
const veiculoRoutes = Router();

const veiculoController: VeiculoController = new VeiculoController();
/** Get person by it attributes */
veiculoRoutes.get('/veiculo/', veiculoController.getAll);
veiculoRoutes.get('/veiculo/:id', veiculoController.getByID);
veiculoRoutes.get('/veiculo/matricola/:id', veiculoController.getByMatricula);


veiculoRoutes.post('/veiculo/', veiculoController.novoVeiculo);
veiculoRoutes.put('/veiculo/:id', veiculoController.actualizarVeiculo);
veiculoRoutes.delete('/veiculo/:id', veiculoController.removerVeiculo);


export default veiculoRoutes;
