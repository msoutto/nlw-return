import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

// TODO: limit access
app.use(cors(), (req, res, next) => {
    const allowedOrigins = ['https://nlw-return-dun.vercel.app', 'http://localhost:3000', 'https://3000-matheussoutto-nlwreturn*.gitpod.io'];
    const gitpodOrigins = /^https:\/\/3000-matheussoutto-nlwreturn-.+\.gitpod\.io$/
    let urlTest = 'https://3000-matheussoutto-nlwreturn-asdfsd-nrfwe.gitpod.io';
    const origin = req.headers.origin ?? '';
    console.log(origin);

    if (gitpodOrigins.test(urlTest))
        console.log('test passed');

    if (allowedOrigins.includes(origin) || gitpodOrigins.test(origin)) {
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