import { Router } from 'express';
import SchoolController from './../controllers/SchoolController';

const schoolRoutes = Router();
const schoolController = new SchoolController();

schoolRoutes.get('/school/:sgState/:idCity', schoolController.listSchoolsByStateAndCity)
schoolRoutes.post('/school/register', schoolController.store)

export default schoolRoutes;