import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DiscussionsService } from './discussions.service';
import { Comment, Discussion, NestedComment } from './entities/entities';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateNestedCommentDto } from './dto/create-nestedComm.dto';

@Resolver(() => Discussion || Comment || NestedComment)
export class DiscussionsResolver {
  constructor(private readonly discussionsService: DiscussionsService) {}

  @Mutation(() => Discussion)
  async createDiscussion(
    @Args('discussion') createDto: CreateDiscussionDto,
  ): Promise<Discussion> {
    return await this.discussionsService.createDiscussion(createDto);
  }

  @Mutation(() => Comment)
  async createComment(
    @Args('comment') createDto: CreateCommentDto,
  ): Promise<Comment> {
    return await this.discussionsService.createComment(createDto);
  }

  @Mutation(() => NestedComment)
  async createNestedComment(
    @Args('nestedComment') createDto: CreateNestedCommentDto,
  ): Promise<NestedComment> {
    return await this.discussionsService.createNestedComment(createDto);
  }

  @Query(() => [Discussion])
  async getDiscussions(): Promise<Discussion[]> {
    return await this.discussionsService.getDiscussions();
  }

  @Query(() => [Comment])
  async getDiscussionComments(@Args('id') id: string): Promise<Comment[]> {
    return await this.discussionsService.getDiscussionComments(id);
  }

  @Query(() => [NestedComment])
  async getNestedComments(@Args('id') id: string): Promise<NestedComment[]> {
    return await this.discussionsService.getNestedComments(id);
  }
}
