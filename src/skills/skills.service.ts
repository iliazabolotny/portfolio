import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class SkillsService {
  constructor(private readonly prisma: PrismaService) {}
  findByProfile(profileId: string) { return this.prisma.skill.findMany({ where: { profileId }, orderBy: [{ category: 'asc' }, { name: 'asc' }] }); }
}
