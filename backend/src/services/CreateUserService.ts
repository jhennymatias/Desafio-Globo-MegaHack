import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

interface Resquest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Resquest): Promise<User> {
    const userRepository = getRepository(User);

    const userExist = userRepository.findOne({
      where: { email },
    });

    if (!userExist) {
      throw new Error('Email adress already used');
    }

    const hashPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashPassword,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
