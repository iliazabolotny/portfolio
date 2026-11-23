import { Field, ID, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Skill {
  @Field(()=>ID)
  id!: string;
  @Field()
  name!: string;
  @Field({ nullable: true })
  category?: string;
  @Field({ nullable: true })
  level?: string;
  @Field(() => ID, { nullable: true })
  profileId?: string;
}
