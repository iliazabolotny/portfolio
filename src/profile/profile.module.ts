import { Module } from '@nestjs/common';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';
import { SkillsService } from '../skills/skills.service';
import { ExperienceService } from '../experience/experience.service';
import { ProjectsService } from '../projects/projects.service';
@Module({ providers: [ProfileResolver, ProfileService, SkillsService, ExperienceService, ProjectsService] })
export class ProfileModule {}
