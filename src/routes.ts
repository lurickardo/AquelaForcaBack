import { Router } from 'express';
import localityRoutes from './routes/LocalityRoutes';
import schoolRoutes from './routes/SchoolRoutes';

const routes = Router();

routes.use('/api/', localityRoutes, schoolRoutes); 
routes.use(function(req, res){
    res.send(404);
});

export default routes;