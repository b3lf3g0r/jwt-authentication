/**
 * @fileoverview - App configuration file
 * @author: b3lf3g0r
 * @version: 1.0.0
 * @since: 2023-02-19
 * */
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import { AuthRoutes } from './routes/routes.js';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression()); // compress all responses
app.use(cookieParser()); // parse cookies
app.use(express.json());
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1); // trust first proxy


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(new AuthRoutes().inti());

export default app;
