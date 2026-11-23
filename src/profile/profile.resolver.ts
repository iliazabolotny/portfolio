import { Parent, ResolveField, Resolver, Query } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { Skill } from '../skills/entities/skill.entity';
import { SkillsService } from '../skills/skills.service';
import { Experience } from '../experience/etitites/experience.entity';
import { ExperienceService } from '../experience/experience.service';
import { Project } from '../projects/entitites/project.entity';
import { ProjectsService } from '../projects/projects.service';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profiles: ProfileService,
    private readonly skills: SkillsService,
    private readonly experience: ExperienceService,
    private readonly projects: ProjectsService,
  ) {}

  @Query(() => Profile, { name: 'profile', description: 'Returns the portfolio profile and its related information.' })
  profile() { return this.profiles.getProfile(); }

  @ResolveField(() => [Skill], { name: 'skills' })
  skillsList(@Parent() profile: Profile) { return this.skills.findByProfile(profile.id); }

  @ResolveField(() => [Experience], { name: 'experience' })
  experienceList(@Parent() profile: Profile) { return this.experience.findByProfile(profile.id); }

  @ResolveField(() => [Project], { name: 'projects' })
  projectsList(@Parent() profile: Profile) { return this.projects.findByProfile(profile.id); }
}
