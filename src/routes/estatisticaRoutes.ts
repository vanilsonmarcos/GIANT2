import Container from "typedi";
import Router from "express";
import EstatisticasService from "../services/EstatisticasService";
import EstatisticasController from "../controllers/EstatisticasController";

const estatiscaService: EstatisticasService = Container.get(EstatisticasService);
const estatisticaController: EstatisticasController = new EstatisticasController(estatiscaService);

const estatisticaRoutes = Router();

estatisticaRoutes.get("/estatistica_todos/", estatisticaController.getAll.bind(estatisticaController));
estatisticaRoutes.get("/estatistica_apolices/", estatisticaController.getAllApolice.bind(estatisticaController));
estatisticaRoutes.get("/estatistica_clientes/", estatisticaController.getAllClients.bind(estatisticaController));

estatisticaRoutes.get("/estatistica_todos/:inicio/:fim/", estatisticaController.getAllByInterval.bind(estatisticaController));
estatisticaRoutes.get("/estatistica_apolices/:inicio/:fim/", estatisticaController.getAllApoliceByInterval.bind(estatisticaController));
estatisticaRoutes.get("/estatistica_clientes/:inicio/:fim/", estatisticaController.getAllClientsByInterval.bind(estatisticaController));

export default estatisticaRoutes;