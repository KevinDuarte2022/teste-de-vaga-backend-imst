import { Router } from 'express';
import ApartamentoController from '../controllers/ApartamentoController';

const router = Router();

router.post('/apartamentos', ApartamentoController.create);
router.get('/apartamentos', ApartamentoController.getAll);
router.get('/apartamentos/:id', ApartamentoController.getOne);
router.put('/apartamentos/:id', ApartamentoController.update);
router.delete('/apartamentos/:id', ApartamentoController.delete);

export default router;
