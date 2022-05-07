import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();
// TODO: limit access
app.use(cors(), (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://nlw-return-dun.vercel.app/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
});

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP Server running!');
});