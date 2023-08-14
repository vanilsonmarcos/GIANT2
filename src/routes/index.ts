import Router from 'express';
import pessoaRoutes from './pessoaRoutes';

const routes = Router();



routes.use(pessoaRoutes);


export default routes;
