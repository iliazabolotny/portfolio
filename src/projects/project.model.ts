import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Project {
  @Field() id: string;
  @Field() name: string;
  @Field({ nullable: true }) description?: string;
  @Field({ nullable: true }) url?: string;
  @Field({ nullable: true }) repositoryUrl?: string;
  @Field(() => [String]) technologies: string[];
  @Field() featured: boolean;
}
