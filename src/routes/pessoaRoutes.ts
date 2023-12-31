import 'reflect-metadata';
import Container from "typedi";
import { Router } from "express";
import PessoaController from "../controllers/PessoaController";
import PessoaService from "../services/PessoaService";

const pessoaService: PessoaService = Container.get(PessoaService);
const pessoaController: PessoaController = new PessoaController(pessoaService);
const pessoaRoutes = Router();

pessoaRoutes.get('/pessoa/', pessoaController.getAll.bind(pessoaController));
pessoaRoutes.get('/pessoa/tipo/', pessoaController.getAllPessoaTipo.bind(pessoaController));

pessoaRoutes.get('/clientes/', pessoaController.getAllClientes.bind(pessoaController));

pessoaRoutes.get('/pessoa/nbi/:nbi', pessoaController.getByNBI.bind(pessoaController));
pessoaRoutes.get('/pessoa/nif/:nif', pessoaController.getByNIF.bind(pessoaController));
pessoaRoutes.get('/pessoa/email/:email', pessoaController.getByEmail.bind(pessoaController));
pessoaRoutes.get('/pessoa/telefone/:telefone', pessoaController.getByPhoneNumber.bind(pessoaController));
pessoaRoutes.get('/pessoa/:id', pessoaController.getByID.bind(pessoaController));

pessoaRoutes.post('/pessoa/', pessoaController.criar.bind(pessoaController));
pessoaRoutes.put('/pessoa/', pessoaController.actualizar.bind(pessoaController));
pessoaRoutes.delete('/pessoa/:id', pessoaController.remover.bind(pessoaController));

export default pessoaRoutes;
