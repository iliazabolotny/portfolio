import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}
  async getProfile() {
    const profile = await this.prisma.profile.findFirst({ orderBy: { createdAt: 'asc' } });
    if (!profile) throw new NotFoundException('Profile has not been initialized');
    return profile;
  }
}
