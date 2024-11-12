import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { PostItemService } from './postItem.service';
import { PostItem } from './postItem.entity';
import { CreatePostItemDto } from './postItem.dto';

@Controller()
export class PostItemController {
  constructor(private readonly postItemService: PostItemService) {}

  @Get()
  findAll(): Promise<PostItem[]> {
    return this.postItemService.findAll();
  }

  @Post()
  createPostItem(@Body() postItemData: CreatePostItemDto): Promise<PostItem> {
    return this.postItemService.createPostItem(postItemData);
  }

  @Delete(':id')
  deletePostItem(@Body('id') id: string): Promise<PostItem> {
    return this.postItemService.deletePostItem(id);
  }
}
