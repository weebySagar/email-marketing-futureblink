import express from 'express';

import { mongoDBCon } from './src/config/mongoDBCon.js';
import authRoutes from './src/api/routes/auth/auth.routes.js';
import emailSequenceRoutes from './src/api/routes/emailsequence/emailsequence.routes.js'



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/emailsequence', emailSequenceRoutes)

const restart = () => mongoDBCon().then(() => {
    console.log('mongodb connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

}).catch(err => {
    console.log('something went wrong,server stopped ,', err);
})


restart();