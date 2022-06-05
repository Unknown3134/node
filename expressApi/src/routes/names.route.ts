import { Router } from 'express';
const namesRouter = Router();

namesRouter.get('/', (req, res) => {
  // send array of random names
  res.send(['John', 'Jane', 'Joe']);
});

export default namesRouter;
