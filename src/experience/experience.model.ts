import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Experience {
  @Field() id: string;
  @Field() company: string;
  @Field() position: string;
  @Field({ nullable: true }) location?: string;
  @Field() startDate: Date;
  @Field({ nullable: true }) endDate?: Date;
  @Field() isCurrent: boolean;
  @Field({ nullable: true }) description?: string;
  @Field(() => [String]) achievements: string[];
}
