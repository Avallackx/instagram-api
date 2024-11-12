import { PostItem } from './postItem.entity';
import { Module } from '@nestjs/common';
import { PostItemController } from './postItem.controller';
import { PostItemService } from './postItem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([PostItem])],
  controllers: [PostItemController],
  providers: [PostItemService],
  exports: [PostItemService],
})
export class PostItemModule {}
