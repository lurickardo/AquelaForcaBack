import {Router} from 'express';
import StudentController from './../controllers/StudentController';

const studentRoutes = Router();
const studentController = new StudentController();

studentRoutes.get('/student/:idResponsible', studentController.listStudentsByResponsible)
studentRoutes.post('/student/register', studentController.store)
studentRoutes.put('/student/edit/:idResponsible', studentController.update)
studentRoutes.delete('/student/exclude/:id', studentController.delete)

export default studentRoutes;