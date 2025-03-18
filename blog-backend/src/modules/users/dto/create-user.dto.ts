import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
