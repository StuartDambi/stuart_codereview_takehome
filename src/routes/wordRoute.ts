import express from 'express';
import WordController from '../controllers/wordController';

const router = express.Router();

router.post('/numberinwords', WordController.convertNumberToWord);

export default router;
