import { getRepository } from 'typeorm';

import UserTag from '../models/UserTag';

interface ResquestData {
  tags: Array<string>;
  id: string;
}

class ChooseUserTagsService {
  public async execute({ tags, id }: ResquestData): Promise<UserTag[]> {
    const userTagsRepository = getRepository(UserTag);

    const userTagsCreate = userTagsRepository.create(
      tags.map(tag => ({
        user_id: id,
        app_tag_id: tag,
      }))
    );

    await userTagsRepository.save(userTagsCreate);

    return userTagsCreate;
  }
}

export default ChooseUserTagsService;
