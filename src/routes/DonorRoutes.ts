import { Router } from 'express';
import DonorController from '../controllers/DonorController';

const donorRoutes = Router();
const donorController = new DonorController();

export default donorRoutes; 