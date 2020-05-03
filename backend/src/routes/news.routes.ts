import { Router } from 'express';
import { getRepository } from 'typeorm';

import CustomNewsService from '../services/CustomNewsService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import New from '../models/New';

const newsRouter = Router();

newsRouter.get('/', async (req, res) => {
  const newsRepository = getRepository(New);

  const allNews = newsRepository.find();

  return res.json(allNews);
});

newsRouter.get('/feed', ensureAuthenticated, async (req, res) => {
  const { user } = req;
  const customNews = new CustomNewsService();

  const newsForThisUser = await customNews.execute(user.id);

  return res.json(newsForThisUser);
});

export default newsRouter;
