import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PortfolioSeedService implements OnApplicationBootstrap {
  constructor(private readonly prisma: PrismaService) {}

  async onApplicationBootstrap() {
    const profileId = 'portfolio-profile';
    const exists = await this.prisma.profile.findUnique({ where: { id: profileId } });
    if (exists) return;

    await this.prisma.profile.create({
      data: {
        id: profileId,
        name: 'Заболотный Илья Александрович',
        description: 'Fullstack-разработчик с коммерческим опытом создания enterprise-приложений на TypeScript, React, Next.js, Java, Spring Framework, Node.js. Работал в Agile-командах НетКрэкер, ВымпелКом-Информационные технологии, также в проекте с Waterfall-методологией в компании Тензор. Занимался разработкой решений и алгоритмов для пространственно-временной обработки сигналов для современных систем беспроводной связи в компании Радио Лаб НН.',
        email: 'zabolotnyyia@gmail.com',
        location: 'Russia',
        githubUrl: 'https://github.com/iliazabolotny',
        gitlabUrl: 'https://gitlab.com/iliazabolotny',
        websiteUrl: 'https://career.habr.com/iliazabolotny',
        skills: { create: [
          { name: 'TypeScript', category: 'Backend', level: 'Advanced' },
          { name: 'Node.js', category: 'Backend', level: 'Advanced' },
          { name: 'NestJS', category: 'Backend', level: 'Advanced' },
          { name: 'GraphQL', category: 'Backend', level: 'Advanced' },
          { name: 'Prisma', category: 'Backend', level: 'Advanced' },
          { name: 'PostgreSQL', category: 'Database', level: 'Advanced' },
          { name: 'Docker', category: 'DevOps', level: 'Advanced' },
        ] },
        experience: { create: [] },
        projects: { create: [
          {name: 'Моделирование пространственной когерентности многомодового сигнала в случайно-неоднородном волноводе', featured: true, authors: ['И.А Заболтный', 'А.И. Малеханов'], status: 'published', releaseDate: new Date('2019-05-13'), url: 'https://elibrary.ru/item.asp?id=41242272'},
          {name: ' К вопросу об оптимальной пространственной обработке многомодовых сигналов в случайно-неоднородных волноводах.', featured: true, authors: ['И.А Заболтный', 'А.И. Малеханов'], status: 'published', releaseDate: new Date('2020-05-15'), url: 'https://elibrary.ru/item.asp?id=44254507'}
        ] },
      },
    });
  }
}
