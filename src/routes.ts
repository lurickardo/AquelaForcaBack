import { Router } from 'express';
import localityRoutes from './routes/LocalityRoutes';
import schoolRoutes from './routes/SchoolRoutes';
import responsibleRoutes from './routes/ResponsibleRoutes';

const routes = Router();

routes.use('/api/', localityRoutes, schoolRoutes, responsibleRoutes); 
routes.use(function(req, res){
    res.send(404);
});

export default routes;