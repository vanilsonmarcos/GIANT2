import Router from 'express';
import pessoaRoutes from './pessoaRoutes';
import veiculoRoutes from './veiculoRoutes';
import precoCilindradaRoutes from './precoCinindradaRoutes';
import apoliceRoutes from './apoliceRoutes';
import apolicePagamentoRoutes from './apolicePagamento';

const routes = Router();

routes.use(pessoaRoutes);
routes.use(veiculoRoutes);
routes.use(precoCilindradaRoutes);
routes.use(apoliceRoutes);
routes.use(apolicePagamentoRoutes);

export default routes;
