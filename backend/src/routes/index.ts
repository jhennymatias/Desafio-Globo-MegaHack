import { Router } from 'express';

import usersRouter from './users.routes';
import sessionRouter from './sessions.routes';
import tagsRouter from './tags.routes';
import appsRouter from './apps.routes';
import newsRouter from './news.routes';
import userTagsRouter from './usertags.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);
routes.use('/tags', tagsRouter);
routes.use('/apps', appsRouter);
routes.use('/news', newsRouter);
routes.use('/usertags', userTagsRouter);

export default routes;
