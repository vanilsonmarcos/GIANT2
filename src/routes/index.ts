import Router from 'express';
import pessoaRoutes from './pessoaRoutes';
import veiculoRoutes from './veiculoRoutes';
import precoCilindradaRoutes from './precoCinindradaRoutes';
import apoliceRoutes from './apoliceRoutes';
const routes = Router();

routes.use(pessoaRoutes);
routes.use(veiculoRoutes);
routes.use(precoCilindradaRoutes);
routes.use(apoliceRoutes);

export default routes;
