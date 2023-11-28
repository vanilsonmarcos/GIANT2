import Router from "express";
import Container from "typedi";
import AdendaPagamentoService from "../services/AdendaPagamentoService";
import AdendaPagamentoController from "../controllers/AdendaPagamentoController";


const adendaPagamentoService: AdendaPagamentoService = Container.get(AdendaPagamentoService);
const adendaPagamentoController: AdendaPagamentoController = new AdendaPagamentoController(adendaPagamentoService);
const adendaPagamentoRoutes = Router();

adendaPagamentoRoutes.get('/adenda_pagamento/', adendaPagamentoController.getAll.bind(adendaPagamentoController));
adendaPagamentoRoutes.get('/adenda_pagamento/:id', adendaPagamentoController.getByID.bind(adendaPagamentoController));
adendaPagamentoRoutes.get('/adenda_pagamento/adenda/:id', adendaPagamentoController.getByID.bind(adendaPagamentoController));
adendaPagamentoRoutes.post('/adenda_pagamento/', adendaPagamentoController.criar.bind(adendaPagamentoController));
// adendaPagamentoRoutes.put('/adenda_pagamento/', adendaPagamentoController.actualizar.bind(adendaPagamentoController));
// adendaPagamentoRoutes.delete('/adenda_pagamento/:id', adendaPagamentoController.remover.bind(adendaPagamentoController));

export default adendaPagamentoRoutes;