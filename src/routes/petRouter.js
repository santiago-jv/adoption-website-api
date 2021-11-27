import { Router } from 'express';
import PetController from '../controllers/petController';
import AuthorizationMiddleware from '../middlewares/authorization';
const petRouter = Router();

petRouter.use(AuthorizationMiddleware)

petRouter.post('/', PetController.createPet)


export default petRouter;