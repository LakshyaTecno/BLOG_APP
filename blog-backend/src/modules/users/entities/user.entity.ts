import { BaseEntity } from 'src/common/entities/base.entity';
import { Post } from 'src/modules/posts/entities/post.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  provider: string; // google/facebook

  @Column()
  providerId: string; // OAuth ID

  @Column({ unique: true })
  email: string;

  @Column()
  displayName: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
