import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from './routes';

const app = express();

dotenv.config();

// TODO: limit access
app.use(cors(), (req, res, next) => {
    const allowedOrigins = ['https://nlw-return-dun.vercel.app', 'https://3000-matheussoutto-nlwreturn*.gitpod.io'];
    const origin = req.headers.origin ?? '';
    const env_url = process.env.WEB_URL ?? '';

    if (allowedOrigins.includes(origin) || origin.includes(env_url)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        console.log('passed: ', origin);
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    return next();
});

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP Server running!');
});