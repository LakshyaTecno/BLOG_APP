import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

describe('PostsService', () => {
    let service: PostsService;
    let repo: Repository<Post>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PostsService,
                {
                    provide: getRepositoryToken(Post),
                    useClass: Repository,
                },
            ],
        }).compile();

        service = module.get<PostsService>(PostsService);
        repo = module.get<Repository<Post>>(getRepositoryToken(Post));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    // Add more test cases for create, find etc.
});
