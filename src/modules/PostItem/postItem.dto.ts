import { IsNotEmpty } from 'class-validator';

export class CreatePostItemDto {
  @IsNotEmpty()
  image: string;
}
