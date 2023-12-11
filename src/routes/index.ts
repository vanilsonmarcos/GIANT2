import Router from 'express';
import pessoaRoutes from './pessoaRoutes';
import veiculoRoutes from './veiculoRoutes';
import precoCilindradaRoutes from './precoCilindradaRoutes';
import apoliceRoutes from './apoliceRoutes';
import apoliceTipoRoutes from './apoliceTipoRoutes';
import apoliceGeneratePDFRoutes from './apoliceGeneratePDFRoutes';
import adendaPagamentoRoutes from './adendaPagamentoRoute';
import coberturaRoutes from './coberturaRoutes';
import adendaRoutes from './adendaRoutes';
import apoliceFracionamentoRoutes from './apoliceFracionamentoRoutes';
import estatisticaRoutes from './estatisticaRoutes';

const routes = Router();

routes.use(pessoaRoutes);
routes.use(veiculoRoutes);
routes.use(coberturaRoutes);
routes.use(precoCilindradaRoutes);
routes.use(adendaRoutes);
routes.use(adendaPagamentoRoutes);
routes.use(apoliceRoutes);
routes.use(apoliceTipoRoutes);
routes.use(apoliceFracionamentoRoutes)
routes.use(apoliceGeneratePDFRoutes);
routes.use(estatisticaRoutes);

export default routes;
