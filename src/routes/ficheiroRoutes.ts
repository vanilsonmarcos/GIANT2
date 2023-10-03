import Router from "express";
import Container from "typedi";
import FicheiroService from "../services/FicheiroService";
import FicheiroController from "../controllers/FicheiroController";

const ficheiroService: FicheiroService = Container.get(FicheiroService);
const ficheiroController: FicheiroController = new FicheiroController(ficheiroService);
 
const ficheiroRoutes= Router();

ficheiroRoutes.get("/ficheiro/:id", ficheiroController.getByID.bind(ficheiroController));
ficheiroRoutes.post("/ficheiro/", ficheiroController.criar.bind(ficheiroController));
ficheiroRoutes.delete("/ficheiro/:id", ficheiroController.remover.bind(ficheiroController));

export default ficheiroRoutes;