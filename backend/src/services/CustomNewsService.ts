import { getRepository, getCustomRepository, In } from 'typeorm';

import UserTagsRepository from '../repositories/UserTagsRepository';

import New from '../models/New';

class CustomNewsService {
  public async execute(id: string): Promise<New[]> {
    const newsRepository = getRepository(New);
    const userTagsRepository = getCustomRepository(UserTagsRepository);

    const allUserTags = await userTagsRepository.findAllUserTags(id);

    const customNews = await newsRepository.find({
      app_tag_id: In(allUserTags.map(tag => tag.app_tag_id)),
    });

    return customNews;
  }
}

export default CustomNewsService;
