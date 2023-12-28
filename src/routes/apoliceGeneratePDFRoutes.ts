import 'reflect-metadata';
import { Router } from "express";
import ApoliceGeneratePDFService from '../services/ApoliceGeneratePDFService';
import ApoliceGeneratePDFController from '../controllers/ApoliceGeneratePDFController';
import Container from 'typedi';

const apoliceGeneratePDFService: ApoliceGeneratePDFService = Container.get(ApoliceGeneratePDFService);
const apoliceGeneratePDFController:ApoliceGeneratePDFController = new ApoliceGeneratePDFController(apoliceGeneratePDFService);

const apoliceGeneratePDFRoutes = Router();

apoliceGeneratePDFRoutes.get('/generate_apolice/apolice/:id', apoliceGeneratePDFController.getApolice.bind(apoliceGeneratePDFController));
apoliceGeneratePDFRoutes.get('/generate_certificado/adenda/:id', apoliceGeneratePDFController.getCertificado.bind(apoliceGeneratePDFController));


export default apoliceGeneratePDFRoutes;