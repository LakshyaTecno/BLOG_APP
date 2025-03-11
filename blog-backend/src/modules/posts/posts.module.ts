import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './entities/post.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, User]), // 👈 Make sure Post entity is registered here
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService], // Optional if other modules need PostsService
})
export class PostsModule {}
