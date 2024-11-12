import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostItem } from './postItem.entity';
import { CreatePostItemDto } from './postItem.dto';

@Injectable()
export class PostItemService {
  constructor(
    @InjectRepository(PostItem)
    private companiesRepository: Repository<PostItem>
  ) {}

  findAll(): Promise<PostItem[]> {
    return this.companiesRepository.find();
  }

  createPostItem(data: CreatePostItemDto): Promise<PostItem> {
    const newPostItem = this.companiesRepository.create(data);
    return this.companiesRepository.save(newPostItem);
  }

  async deletePostItem(id: string): Promise<PostItem> {
    const postItemToDelete = await this.companiesRepository.findOne({ where: { id } });

    if (!postItemToDelete) {
      throw new Error(`PostItem with id ${id} not found`);
    }

    await this.companiesRepository.delete(id);

    return postItemToDelete;
  }
}
