import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateUserService from '../services/CreateUserService';

import User from '../models/User';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

usersRouter.get('/', ensureAuthenticated, async (req, res) => {
  const usersRepository = getRepository(User);
  const { user } = req;

  const showAuthenticatedUser = await usersRepository.findOne({
    where: { id: user.id },
  });

  delete showAuthenticatedUser?.password;

  return res.json(showAuthenticatedUser);
});

export default usersRouter;
