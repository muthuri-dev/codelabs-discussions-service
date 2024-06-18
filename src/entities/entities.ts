import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Discussion {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  image: string;

  @Field()
  user_id: string;

  @Field()
  created_at: Date;

  @Field(() => [DiscussionComment], { nullable: true })
  discussion_comments?: DiscussionComment[];
}

@ObjectType()
export class DiscussionComment {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;

  @Field()
  discussion_id: string;

  @Field()
  user_id: string;

  @Field()
  created_at: Date;

  @Field(() => [NestedComment], { nullable: true })
  nestedComments?: NestedComment[];
}

@ObjectType()
export class NestedComment {
  @Field(() => ID)
  id: string;

  @Field()
  content: string;

  @Field()
  comment_id: string;

  @Field()
  user_id: string;

  @Field()
  created_at: Date;
}
