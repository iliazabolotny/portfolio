import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Skill {
  @Field() id: string;
  @Field() name: string;
  @Field({ nullable: true }) category?: string;
  @Field({ nullable: true }) level?: string;
}
