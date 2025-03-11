import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOneById(id: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['posts'], // Fetch posts with user
    });
  }

  async createOrUpdate(user: Partial<User>): Promise<User> {
    return this.usersRepository.save(user);
  }
}
