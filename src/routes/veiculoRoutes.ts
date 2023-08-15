import { Router } from "express";
import VeiculoController from "../controllers/VeiculoController";
const pessoaRoutes = Router();

const veiculoController: VeiculoController = new VeiculoController();
/** Get person by it attributes */
pessoaRoutes.get('/veiculo/', veiculoController.getAll);
pessoaRoutes.get('/veiculo/:id', veiculoController.getByID);
pessoaRoutes.get('/veiculo/matricola/:id', veiculoController.getByMatricula);


pessoaRoutes.post('/veiculo/', veiculoController.novoVeiculo);
pessoaRoutes.put('/veiculo/:id', veiculoController.actualizarVeiculo);
pessoaRoutes.delete('/veiculo/:id', veiculoController.removerVeiculo);


export default pessoaRoutes;
