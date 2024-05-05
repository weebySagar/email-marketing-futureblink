import express from 'express';

import { registerUser } from "../../controllers/auth/auth.controller.js";
import validateBody from '../../../middlewares/validateBody.js';
import userSchemaValidator from '../../../validators/userSchemaValidator.js';


const router = express.Router();


router.route('/register').post(validateBody(userSchemaValidator), registerUser);

export default router;