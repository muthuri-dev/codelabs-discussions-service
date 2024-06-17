import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateNestedCommentDto {
  @Field()
  content: string;

  @Field()
  comment_id: string;

  @Field()
  user_id: string;
}
