import Router from "express";
import Container from "typedi";
import AdendaPagamentoService from "../services/AdendaPagamentoService";
import AdendaPagamentoController from "../controllers/AdendaPagamentoController";


const adendaPagamentoService: AdendaPagamentoService = Container.get(AdendaPagamentoService);
const adendaPagamentoControllerr: AdendaPagamentoController = new AdendaPagamentoController(adendaPagamentoService);
const adendaPagamentoRoutes = Router();

adendaPagamentoRoutes.get('/adenda_pagamento/', adendaPagamentoControllerr.getAll.bind(adendaPagamentoControllerr));
adendaPagamentoRoutes.get('/adenda_pagamento/:id', adendaPagamentoControllerr.getByID.bind(adendaPagamentoControllerr));
adendaPagamentoRoutes.put('/adenda_pagamento/', adendaPagamentoControllerr.criar.bind(adendaPagamentoControllerr));
adendaPagamentoRoutes.post('/adenda_pagamento/', adendaPagamentoControllerr.actualizar.bind(adendaPagamentoControllerr));
adendaPagamentoRoutes.delete('/adenda_pagamento/:id', adendaPagamentoControllerr.remover.bind(adendaPagamentoControllerr));