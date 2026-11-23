import { Field, ID, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Experience {
  @Field(()=>ID)
  id!: string;
  @Field()
  company!: string;
  @Field()
  position!: string;
  @Field({ nullable: true })
  location?: string;
  @Field() startDate!: Date;
  @Field({ nullable: true })
  endDate?: Date;
  @Field()
  isCurrent!: boolean;
  @Field({ nullable: true })
  description?: string;
  @Field(() => [String])
  achievements!: string[];
  @Field(() => ID, { nullable: true })
  profileId?: string;
}
