import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
        @InjectRepository(User)
        private usersRepository: Repository<User>,  // <== Make sure this is injected!
    ) {}

    async findAll(): Promise<Post[]> {
        return this.postsRepository.find({ relations: ['user'] });
    }

    async findOne(id: string): Promise<Post | null> {
        return this.postsRepository.findOne({ where: { id }, relations: ['user'] });
    }

    async create(createPostDto: any, userId: string) {
        const user = await this.usersRepository.findOne({
            where: { id: userId },  // id should match your UUID field
        });

    if (!user) {
        throw new Error('User not found');
    }

    const post = this.postsRepository.create({
        ...createPostDto,
        user,  // Directly assign the found user entity
    });
     await this.postsRepository.save(post);
    
    }

    
}
