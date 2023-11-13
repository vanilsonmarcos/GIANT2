import Container from "typedi";
import Router from "express";
import AdendaController from "../controllers/AdendaController";
import AdendaService from "../services/AdendaService";

const adendaService: AdendaService = Container.get(AdendaService);
const adendaController: AdendaController = new AdendaController(adendaService);

const premioAdendaRoutes = Router();

premioAdendaRoutes.post("/calcular_premio_adenda/", adendaController.calculatePremio.bind(adendaController));

export default premioAdendaRoutes;