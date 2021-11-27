import { Router } from 'express';
import PetController from '../controllers/petController';
import AuthorizationMiddleware from '../middlewares/authorization';
const petRouter = Router();

petRouter.use(AuthorizationMiddleware)


petRouter.get('/', PetController.getPets)
petRouter.post('/', PetController.createPet)
petRouter.delete('/:id', PetController.deletePet)

export default petRouter;