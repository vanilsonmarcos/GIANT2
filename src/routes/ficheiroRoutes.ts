import Router from "express";
import Container from "typedi";
import FicheiroService from "../services/FicheiroService";
import FicheiroController from "../controllers/FicheiroController";


const ficheiroService: FicheiroService = Container.get(FicheiroService);
const ficheiroController: FicheiroController = new FicheiroController(ficheiroService);
 
const ficheiroRoutes= Router();

ficheiroRoutes.post("/ficheiro/", ficheiroController.criar.bind(ficheiroController));


export default ficheiroRoutes;