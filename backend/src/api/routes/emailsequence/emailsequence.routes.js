import express from 'express';

import validateBody from '../../../middlewares/validateBody.js';
import emailSequenceSchemaValidator from '../../../validators/emailSequenceValidator.js';
import authenticateUserByToken from '../../../middlewares/authenticateUserByToken.js';
import { createEmailSequence } from '../../controllers/emailsequence/create.emailSequence.controller.js';


const router = express.Router();

router.route('/').post(authenticateUserByToken, validateBody(emailSequenceSchemaValidator), createEmailSequence);

export default router;