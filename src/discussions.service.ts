import { Injectable } from '@nestjs/common';
import { PrismadbService } from './prismadb/prismadb.service';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import {
  Discussion,
  NestedComment,
  DiscussionComment,
} from './entities/entities';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateNestedCommentDto } from './dto/create-nestedComm.dto';

@Injectable()
export class DiscussionsService {
  constructor(private readonly prismaService: PrismadbService) {}

  async createDiscussion(createDto: CreateDiscussionDto): Promise<Discussion> {
    const { content, image, title, user_id } = createDto;
    return await this.prismaService.discussion.create({
      data: { content, image, title, user_id },
    });
  }

  async createComment(createDto: CreateCommentDto): Promise<DiscussionComment> {
    const { content, discussion_id, user_id } = createDto;
    return await this.prismaService.discussionComment.create({
      data: { content, discussion_id, user_id },
    });
  }

  async createNestedComment(
    createDto: CreateNestedCommentDto,
  ): Promise<NestedComment> {
    const { comment_id, content, user_id } = createDto;
    return await this.prismaService.nestedComment.create({
      data: { comment_id, content, user_id },
    });
  }

  //querying data

  async getDiscussions(): Promise<Discussion[]> {
    return await this.prismaService.discussion.findMany();
  }

  async getDiscussionComments(id: string): Promise<DiscussionComment[]> {
    return await this.prismaService.discussionComment.findMany({
      where: { discussion_id: id },
    });
  }

  async getNestedComments(id: string): Promise<NestedComment[]> {
    return await this.prismaService.nestedComment.findMany({
      where: { comment_id: id },
    });
  }
}
