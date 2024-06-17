import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDiscussionDto {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  image: string;

  @Field()
  user_id: string;
}
