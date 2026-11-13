import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Profile {
  @Field() id: string;
  @Field() name: string;
  @Field() description: string;
  @Field({ nullable: true }) email?: string;
  @Field({ nullable: true }) location?: string;
  @Field({ nullable: true }) githubUrl?: string;
  @Field({ nullable: true }) gitlabUrl?: string;
  @Field({ nullable: true }) websiteUrl?: string;
}
