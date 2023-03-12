import { config } from 'dotenv';
config({ path: `.env.local` });

import express, { Express } from 'express';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .listen(process.env.SERVER_PORT, () =>
    console.log(`Live on ${`http://localhost:${process.env.SERVER_PORT}`}`)
  )
  .on('error', console.error);
