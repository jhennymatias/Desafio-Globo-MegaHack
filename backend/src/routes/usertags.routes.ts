import { Router } from 'express';

import ChooseUserTagService from '../services/ChooseUserTagsService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userTagsRouter = Router();

userTagsRouter.use(ensureAuthenticated);

userTagsRouter.post('/', async (req, res) => {
  const { tags } = req.body;
  const { user } = req;

  const createUserTags = new ChooseUserTagService();

  const userTags = await createUserTags.execute({
    tags,
    id: user.id,
  });

  return res.json(userTags);
});

export default userTagsRouter;
