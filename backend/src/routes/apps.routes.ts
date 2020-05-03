import { Router } from 'express';
import { getRepository } from 'typeorm';

import App from '../models/App';

const appsRouter = Router();

appsRouter.get('/', async (req, res) => {
  const appRepository = getRepository(App);

  const allApps = appRepository.find();

  return res.json(allApps);
});

export default appsRouter;
