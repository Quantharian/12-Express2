import { resolve } from 'path';
import express from 'express';
import createDebug from 'debug';
import morgan from 'morgan';
import cors from 'cors';
import {
    getIndexController,
    notFoundController,
    postController,
} from './controllers.js';
import { logger } from './middleware.js';
import { errorManager } from './errors.js';
import { usersRouter } from './routers/users.routers.js';

export const app = express();
const debug = createDebug('demo:app');

const __dirname = resolve();
const publicPath = resolve(__dirname, 'public');

debug('Iniciando App...');

app.disable('x-powered-by');

// Middlewares

app.use(cors());

app.use(morgan('common'));
app.use(express.json());
app.use(logger('debugger'));
app.use(express.static(publicPath));

app.get('/', getIndexController);
app.get('/about', getIndexController);
app.get('/contacts', getIndexController);
app.post('/contacts', postController);
app.get('/portfolio', getIndexController);

app.use('/api/users', usersRouter);

app.use('*', notFoundController);

app.use(errorManager);
