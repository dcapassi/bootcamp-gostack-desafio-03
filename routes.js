import { Router } from 'express';
import User from './src/app/models/User';
import SessionController from './src/app/controllers/SessionControllers';
import authMiddlware from './src/app/middlewares/auth';
import RecipientControllers from './src/app/controllers/RecipientControllers';
import DeliverymanControllers from './src/app/controllers/DeliverymanControllers';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/recipients', authMiddlware, RecipientControllers.store);
routes.put('/recipients/:id', authMiddlware, RecipientControllers.update);
routes.post('/deliveryman', authMiddlware, DeliverymanControllers.store);

export default routes;
