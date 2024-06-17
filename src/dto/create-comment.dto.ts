import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentDto {
  @Field()
  content: string;

  @Field()
  discussion_id: string;

  @Field()
  user_id: string;
}
