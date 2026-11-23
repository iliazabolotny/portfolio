import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Experience } from 'src/experience/etitites/experience.entity';
import { Project } from 'src/projects/entitites/project.entity';
import { Skill } from 'src/skills/entities/skill.entity';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id!: string;
  @Field()
  name!: string;
  @Field()
  description!: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  location?: string;
  @Field({ nullable: true })
  githubUrl?: string;
  @Field({ nullable: true })
  gitlabUrl?: string;
  @Field({ nullable: true })
  websiteUrl?: string;
  @Field(() => [Skill], { nullable: true })
  skills?: Skill[];
  @Field(() => [Experience], { nullable: true })
  experience?: Experience[];
  @Field(() => [Project], { nullable: true })
  projects?: Project[];
}
