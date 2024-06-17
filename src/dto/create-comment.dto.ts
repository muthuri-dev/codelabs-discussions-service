import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDCommentDto {
  @Field()
  content: string;

  @Field()
  discussion_id: string;

  @Field()
  user_id: string;
}
