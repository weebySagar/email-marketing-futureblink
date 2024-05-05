import express from 'express';

import validateBody from '../../../middlewares/validateBody.js';
import emailSequenceSchemaValidator from '../../../validators/emailSequenceValidator.js';
import authenticateUserByToken from '../../../middlewares/authenticateUserByToken.js';
import { createEmailSequence, deleteEmailSequence } from '../../controllers/emailsequence/index.js'


const router = express.Router();

router.route('/').post(authenticateUserByToken, validateBody(emailSequenceSchemaValidator), createEmailSequence);

router.route('/:id').delete(authenticateUserByToken, deleteEmailSequence)

export default router;