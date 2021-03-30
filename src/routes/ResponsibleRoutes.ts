import { Router } from 'express';
import ResponsibleController from '../controllers/ResponsibleController';

const responsibleRoutes = Router();
const responsibleController = new ResponsibleController();

responsibleRoutes.post('/responsible/login', responsibleController.login)
responsibleRoutes.post('/responsible/register', responsibleController.store)

export default responsibleRoutes;