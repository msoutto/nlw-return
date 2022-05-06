import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();
// TODO: limit access
app.use(cors(/*{
    origin: '';
}*/));
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP Server running!');
});