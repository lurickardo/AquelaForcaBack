import { Router, Request, Response } from 'express';
import localityRoutes from './routes/LocalityRoutes';
import schoolRoutes from './routes/SchoolRoutes';
import responsibleRoutes from './routes/ResponsibleRoutes';
import gradeRoutes from './routes/GradeRoutes';
import studentRoutes from './routes/StudentRoutes';
import supplieRoutes from './routes/SupplieRoutes';
import supplieStudent from './routes/SupplieStudent';

const routes = Router();

routes.use('/api/', localityRoutes, schoolRoutes, responsibleRoutes, gradeRoutes, studentRoutes, supplieRoutes, supplieStudent);
routes.use(function (request: Request, response: Response) {
    response.send(404);
});

export default routes;