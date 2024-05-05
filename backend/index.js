import express from 'express';

import { mongoDBCon } from './src/config/mongoDBCon.js';



const app = express();
const PORT = process.env.PORT || 3000;



const restart = () => mongoDBCon().then(() => {
    console.log('mongodb connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

}).catch(err => {
    console.log('something went wrong,server stopped ,', err);
})


restart();