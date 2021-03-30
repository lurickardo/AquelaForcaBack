import { Router } from 'express';
import StudentController from './../controllers/StudentController';

const studentRoutes = Router();
const studentController = new StudentController();

studentRoutes.get('/student/responsible/:responsible', studentController.listStudentsByResponsible)
studentRoutes.get('/student/school/:school', studentController.listStudentsBySchool)
studentRoutes.post('/student/register', studentController.store)
studentRoutes.put('/student/edit/:responsible', studentController.update)
studentRoutes.delete('/student/exclude/:_id', studentController.delete)

export default studentRoutes;