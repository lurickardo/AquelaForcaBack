import {Router} from 'express';
import SupplieController from './../controllers/SupplieController';

const supplieRoutes = Router();
const supplieController = new SupplieController();

supplieRoutes.get('/supplie', supplieController.listAll)
supplieRoutes.get('/supplie/:idStudent', supplieController.listSuppliesByStudent)
supplieRoutes.post('/supplie/register', supplieController.store)
supplieRoutes.put('/supplie/edit', supplieController.update)
supplieRoutes.put('/supplie/remove', supplieController.delete)

export default supplieRoutes;