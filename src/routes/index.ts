import Router from 'express';
import pessoaRoutes from './pessoaRoutes';
import veiculoRoutes from './veiculoRoutes';
import precoCilindradaRoutes from './precoCilindradaRoutes';
import apoliceRoutes from './apoliceRoutes';
import apoliceGeneratePDFRoutes from './apoliceGeneratePDFRoutes';

import coberturaRoutes from './coberturaRoutes';

const routes = Router();

routes.use(pessoaRoutes);
routes.use(veiculoRoutes);
routes.use(coberturaRoutes);
routes.use(precoCilindradaRoutes);
routes.use(apoliceRoutes);
routes.use(apoliceGeneratePDFRoutes);

export default routes;
