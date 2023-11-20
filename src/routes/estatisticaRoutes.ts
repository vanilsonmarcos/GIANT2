import Container from "typedi";
import Router from "express";
import EstatisticasService from "../services/EstatisticasService";
import EstatisticasController from "../controllers/EstatisticasController";

const estatiscaService: EstatisticasService = Container.get(EstatisticasService);
const estatisticaController: EstatisticasController = new EstatisticasController(estatiscaService);

const estatisticaRoutes = Router();

estatisticaRoutes.post("/estatistica_todos/", estatisticaController.getAll.bind(estatisticaController));
estatisticaRoutes.post("/estatistica_apolices/", estatisticaController.getAllApolice.bind(estatisticaController));
estatisticaRoutes.post("/estatistica_clientes/", estatisticaController.getAllClients.bind(estatisticaController));

export default estatisticaRoutes;