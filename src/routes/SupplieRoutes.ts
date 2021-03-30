import {Router} from 'express';
import SupplieController from './../controllers/SupplieController';

const supplieRoutes = Router();
const supplieController = new SupplieController();

supplieRoutes.get('/supplie', supplieController.listAll)

export default supplieRoutes;