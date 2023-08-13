import { Router } from "express";
import PessoaController from "../controllers/PessoaController";

const pessoaRoutes = Router();


/** Get person by it attributes */
pessoaRoutes.get('pessoa/', new PessoaController().getAll);
pessoaRoutes.get('pessoa/:id', new PessoaController().getByID);
pessoaRoutes.get('pessoa/:nbi', new PessoaController().getByNBI);


/**Get person by Address attributes*/

pessoaRoutes.get('pessoa/:email', new PessoaController().getByEmail);
pessoaRoutes.get('pessoa/:telefone', new PessoaController().getByPhoneNumber);


pessoaRoutes.post('pessoa/', new PessoaController().novaPessoa);
pessoaRoutes.put('pessoa/', new PessoaController().actualizarPessoa);
pessoaRoutes.delete('pessoa/:id', new PessoaController().removerPessoa);




export default pessoaRoutes;
