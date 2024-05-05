import bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';


// hashing password
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

}


export default hashPassword;