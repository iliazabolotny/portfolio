import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Project {
  @Field()
  id!: string;
  @Field()
  name!: string;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  url?: string;
  @Field({ nullable: true })
  repositoryUrl?: string;
  @Field(() => [String], {nullable: true})
  technologies?: string[];
  @Field(()=>[String], {nullable: true})
  authors?: string;
  @Field()
  featured!: boolean;
  @Field({ nullable: true })
  status?: string;
  @Field(() => Date, { nullable: true })
  releaseDate?: Date;
}
