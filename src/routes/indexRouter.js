import { Router } from 'express';
import ownerRouter from './ownerRouter';
import petRouter from './petRouter';
const indexRouter = Router();

indexRouter.use('/owners', ownerRouter)
indexRouter.use('/pets', petRouter)

export default indexRouter;