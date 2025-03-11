
import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Post extends BaseEntity {

    @Column()
    title: string;

    @Column()
    body: string;

    @ManyToOne(() => User, user => user.posts)
    user: User;  

}
