import { Router } from 'express';
import LocalityController from './../controllers/LocalityController';

const localityRoutes = Router();
const localityController = new LocalityController();

localityRoutes.get('/locality/states', localityController.listAllStates)
localityRoutes.get('/locality/cities/:idState', localityController.listAllCitiesByState)

export default localityRoutes;