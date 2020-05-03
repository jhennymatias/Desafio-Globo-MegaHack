import { Router } from 'express';
import { getRepository } from 'typeorm';

import Tag from '../models/Tag';

const tagsRouter = Router();

tagsRouter.get('/:app_id', async (req, res) => {
  const { app_id } = req.params;
  const tagsRepository = getRepository(Tag);

  const tagsFromThatApp = await tagsRepository.find({
    where: { app_id },
  });

  return res.json(tagsFromThatApp);
});

export default tagsRouter;
