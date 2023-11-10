import 'reflect-metadata';
import { Router } from "express";
import ApoliceGeneratePDFService from '../services/ApoliceGeneratePDFService';
import ApoliceGeneratePDFController from '../controllers/ApoliceGeneratePDFController';

const apoliceGeneratePDFService: ApoliceGeneratePDFService = new ApoliceGeneratePDFService();
const apoliceGeneratePDFController:ApoliceGeneratePDFController = new ApoliceGeneratePDFController(apoliceGeneratePDFService);

const apoliceGeneratePDFRoutes = Router();

apoliceGeneratePDFRoutes.get('/generate_apolice/', apoliceGeneratePDFController.getApolice.bind(apoliceGeneratePDFController));
apoliceGeneratePDFRoutes.get('/generate_certificado/', apoliceGeneratePDFController.getCertificado.bind(apoliceGeneratePDFController));


export default apoliceGeneratePDFRoutes;