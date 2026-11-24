import { Resolver, Query } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile } from './models/profile.model';
import { SkillsService } from '../skills/skills.service';
import { ExperienceService } from '../experience/experience.service';
import { ProjectsService } from '../projects/projects.service';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profiles: ProfileService,
    private readonly skills: SkillsService,
    private readonly experience: ExperienceService,
    private readonly projects: ProjectsService,
  ) {}

  @Query(() => Profile, { name: 'profile'})
  profile() {
     return this.profiles.getProfile(); 
  }
}
