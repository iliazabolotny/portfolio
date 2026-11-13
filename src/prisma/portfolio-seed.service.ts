import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PortfolioSeedService implements OnApplicationBootstrap {
  private readonly logger = new Logger(PortfolioSeedService.name);
  constructor(private readonly prisma: PrismaService) {}

  async onApplicationBootstrap() {
    const profileId = 'portfolio-profile';
    const exists = await this.prisma.profile.findUnique({ where: { id: profileId } });
    if (exists) return;

    await this.prisma.profile.create({
      data: {
        id: profileId,
        name: 'Илья Заболотный',
        description: 'Fullstack-разработчик с коммерческим опытом создания enterprise-приложений на TypeScript, React, Next.js, Java, Spring Framework, Node.js. Работал в Scrum/Agile-командах НетКрэкер, ВымпелКом-Информационные технологии, также в проекте с Waterfall-методологией в компании Тензор. Занимался разработкой решений и алгоритмов для пространственно-временной обработки сигналов для современных систем беспроводной связи в компании Радио Лаб НН.',
        email: 'zabolotnyyia@gmail.com',
        location: 'Russia',
        githubUrl: 'https://github.com/iliazabolotny',
        gitlabUrl: 'https://gitlab.com/iliazabolotny',
        websiteUrl: 'https://career.habr.com/iliazabolotny',
        skills: { create: [] },
        experience: { create: [] },
        projects: { create: [] },
      },
    });
    this.logger.log('Created portfolio profile and related records.');
  }
}
