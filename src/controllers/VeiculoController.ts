class VeiculoController {

    constructor() {
       
    }

    // Read/Query a person 
    async getAll(req: Request, res: Response) {
        try {
            const pessoas: Pessoa[] = await new PessoaRepository().getAll();
            const code = 200;
            const message = "Dados das pessoas foram encontrados com sucesso";
            const data = pessoas;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            const code = 404;
            const message = `Os dados das pessoas não foram encontrados`;
            const data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    
    }
    
    async getByID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const pessoa = await new PessoaRepository().getByID(id);
            let code = 200;
            let message = "Dados da pessoa foram encontrados com sucesso";
            let data = pessoa;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            let code = 401;
            let message = `Os dados da pessoa não foram encontrados usando o id de utilizador : ${id}`;
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    
    }
    
    // Create a new person 
    async novoVeiculo(req: Request, res: Response) {
        const pessoa: Pessoa = req.body; // parse body to person data
        try {
            const result = await new PessoaRepository().create(pessoa);
            let code = 200;
            let message = "Dados da pessoa inseridos com sucesso";
            let data = pessoa;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao inserir os dados da Pessoa";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    
    }
    // Update an existent person
    
    async actualizarVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        const pessoa: Pessoa = req.body
        try {
            const result = await new PessoaRepository().update(id, pessoa);
            let code = 200;
            let message = "Dados da pessoa actualizados com sucesso";
            let data = pessoa;
            res.json({
                code,
                message,
                data
            });
        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao actualizar os dados da Pessoa";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    }
    
    // Delete a person 
    
    async removerVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await new PessoaRepository().delete(id);
    
            if (result) {
                let code = 200; // this is ok code 
                let message = "Dados da Pessoa removidos com sucesso";
                let data = {};
                res.json({
                    code,
                    message,
                    data,
                })
            }
    
        } catch (error) {
            let data = {};
            let message = "Ocorreu um erro ao remover os dados do sistema";
            let code = 401; // this is ok code 
            res.json({
                code,
                message,
                data
            })
        }
    }
}

export default VeiculoController;