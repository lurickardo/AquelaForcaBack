import { Router } from 'express';
import GradeController from '../controllers/GradeController';

const gradeRoutes = Router();
const gradeController = new GradeController();

gradeRoutes.get('/grade', gradeController.listAll)

export default gradeRoutes;