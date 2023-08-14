import { Router } from "express";
import PessoaController from "../controllers/PessoaController";
const pessoaRoutes = Router();

const pessoaController: PessoaController = new PessoaController();
/** Get person by it attributes */
pessoaRoutes.get('/pessoa/', pessoaController.getAll);
pessoaRoutes.get('/pessoa/:id', pessoaController.getByID);
pessoaRoutes.get('/pessoa/nbi/:nbi', pessoaController.getByNBI);

/**Get person by Address attributes*/

pessoaRoutes.get('/pessoa/email/:email', pessoaController.getByEmail);
pessoaRoutes.get('/pessoa/telefone/:telefone', pessoaController.getByPhoneNumber);


pessoaRoutes.post('/pessoa/', pessoaController.novaPessoa);
pessoaRoutes.put('/pessoa/:id', pessoaController.actualizarPessoa);
pessoaRoutes.delete('/pessoa/:id', pessoaController.removerPessoa);




export default pessoaRoutes;
