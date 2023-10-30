import 'reflect-metadata';
import Container from "typedi";
import { Router } from "express";
import ApoliceGeneratePDFService from '../services/ApoliceGeneratePDFService';
import ApoliceGeneratePDFController from '../controllers/ApoliceGeneratePDFController';


const apoliceGeneratePDFService: ApoliceGeneratePDFService = Container.get(ApoliceGeneratePDFService);
const apoliceGeneratePDFController:ApoliceGeneratePDFController  = new ApoliceGeneratePDFController(apoliceGeneratePDFService);

const apoliceGeneratePDFRoutes = Router();

apoliceGeneratePDFRoutes.get('/generate_apolice/', apoliceGeneratePDFController.get.bind(ApoliceGeneratePDFController));


export default apoliceGeneratePDFRoutes;