import { Router } from 'express';
import PetController from '../controllers/petController';
import AuthorizationMiddleware from '../middlewares/authorization';
import petValidatorMiddleware from '../helpers/petValidator';
import validationHandlerMiddleware from '../middlewares/validationHandler';

const petRouter = Router();

petRouter.use(AuthorizationMiddleware)


petRouter.get('/', PetController.getPets)
petRouter.post('/',petValidatorMiddleware, validationHandlerMiddleware , PetController.createPet)
petRouter.delete('/:id', PetController.deletePet)

export default petRouter;