import { EntityRepository, Repository } from 'typeorm';
import UserTag from '../models/UserTag';

@EntityRepository(UserTag)
class UserTagsRepository extends Repository<UserTag> {
  public async findAllUserTags(id: string): Promise<UserTag[]> {
    const findUserTags = await this.find({
      where: { user_id: id },
    });

    return findUserTags;
  }
}

export default UserTagsRepository;
