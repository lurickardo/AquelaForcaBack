import { Router } from 'express';
import DonorController from '../controllers/DonorController';

const donorRoutes = Router();
const donorController = new DonorController();

donorRoutes.post('/donor/register', donorController.store)

export default donorRoutes; 