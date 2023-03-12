import { config } from 'dotenv';
config({ path: `.env.local` });

import express from 'express';

import router from './router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app
  .listen(process.env.SERVER_PORT, () =>
    console.log(`Live on ${`http://localhost:${process.env.SERVER_PORT}`}`)
  )
  .on('error', console.error);
