import Router from 'express';
import pessoaRoutes from './pessoaRoutes';
import veiculoRoutes from './veiculoRoutes';

const routes = Router();

routes.use(pessoaRoutes);
routes.use(veiculoRoutes);


export default routes;
