// imports
import express, { Request, Response } from 'express';
import { notFoundErrorHandler } from './middleware/errorHandler.middleware';
import namesRouter from './routes/names.route';

// setup express app
const app = express();
app.use(express.json());

// routes

app.use(notFoundErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Health Check');
});

app.use('/names', namesRouter);

// start server

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
