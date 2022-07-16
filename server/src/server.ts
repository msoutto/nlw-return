import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from './routes';

const app = express();

dotenv.config();

// TODO: limit access
app.use(cors(), (req, res, next) => {
    const allowedOrigins = ['https://nlw-return-dun.vercel.app', 'https://3000-matheussoutto-nlwreturn*.gitpod.io'];
    const gitpodOrigins = /^https:\/\/3000-matheussoutto-nlwreturn-.+\.gitpod\.io[\/]?$/
    let urlTest = 'https://3000-matheussoutto-nlwreturn-dcu2v9iv5zg.ws-us54.gitpod.io';
    const origin = req.headers.origin ?? '';
    const referrer = req.headers.referer ?? '';
    const env_url = process.env.WEB_URL ?? '';
    console.log(env_url);
    console.log(req.headers);

    if (gitpodOrigins.test(urlTest))
        console.log('test passed');

    if (allowedOrigins.includes(origin) || origin.includes(env_url) || referrer.includes(env_url)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        console.log('passed');
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    return next();
});

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP Server running!');
});