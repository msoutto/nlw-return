import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from './routes';

const app = express();

dotenv.config();

app.use(cors(), (req, res, next) => {
    const allowedOrigins = ['https://nlw-return-dun.vercel.app'];
    
    if (process.env.WEB_URL)
        allowedOrigins.push(process.env.WEB_URL);
    
    const origin = req.headers.origin ?? '';

    for (const allowed in allowedOrigins) {
        if (origin.includes(allowed)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
            console.log('passed: ', origin);
        }
    }

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    return next();
});

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP Server running!');
});