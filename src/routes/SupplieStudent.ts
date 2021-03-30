import {Router} from 'express';
import SupplieStudentController from './../controllers/SupplieStudentController';

const supplieStudentRoutes = Router();
const supplieStudentController = new SupplieStudentController();

supplieStudentRoutes.get('/supplieStudent/:idStudent', supplieStudentController.listSuppliesByStudent)
supplieStudentRoutes.post('/supplieStudent/register', supplieStudentController.store)
supplieStudentRoutes.put('/supplieStudent/edit', supplieStudentController.update)
supplieStudentRoutes.put('/supplieStudent/remove/:_id', supplieStudentController.delete)

export default supplieStudentRoutes;