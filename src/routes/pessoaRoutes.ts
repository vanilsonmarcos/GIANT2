import { Router } from "express";
import PessoaController from "../controllers/PessoaController";

const personRoutes = Router();


/** Get person by it attributes */
personRoutes.get('people', new PessoaController().getAll());
personRoutes.get('person/:id', new PessoaController().getByID());
personRoutes.get('person/:nbi', new PessoaController().getByNBI());


/**Get person by Address attributes*/

personRoutes.get('person/:email', new PessoaController().getByEmail());
personRoutes.get('person/:telefone', new PessoaController().getByPhoneNumber());


export default personRoutes;
