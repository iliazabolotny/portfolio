# PORTFOLIO

Бэкенд проект Портфолио на **TypeScript, Node.js, NestJS, GraphQL (Apollo), Prisma и PostgreSQL**.

## Структура приложения

### Слои абстракции

- **GraphQL Resolver (`src/profile/profile.resolver.ts`)** — транспортный слой: объявляет GraphQL query и связывает вложенные поля профиля с сервисами. Бизнес-правила и Prisma-запросы здесь не размещаются.
- **Services (`profile`, `skills`, `experience`, `projects`)** — слой приложения: инкапсулирует получение данных и сортировку связанных коллекций.
- **PrismaService (`src/prisma`)** — инфраструктурный слой доступа к PostgreSQL. Он глобально зарегистрирован через `PrismaModule` и управляет подключением/отключением реализации ORM.

Такое разделение позволяет менять способ хранения независимо и не превращает резолверы в слой бизнес-логики.

### Модель данных

- `Profile` — главная сущность портфолио, содержит имя, описание и профессиональные ссылки.
- `Skill` — навык с категорией и уровнем. Имя навыка уникально в пределах профиля.
- `Experience` — место работы, должность, даты, описание и массив достижений.
- `Project` — проект, описание, ссылка на продукт, репозиторий, технологии и признак избранного.

Связи — `Profile 1:N Skill`, `Profile 1:N Experience`, `Profile 1:N Project`. Внешние ключи используют `ON DELETE CASCADE`. опыт сортируется по дате начала, проекты — по признаку featured и имени.

### GraphQL API

Использован NestJS GraphQL в code-first режиме: GraphQL-схема генерируется из декорированных классов. Это сохраняет типизацию TypeScript и уменьшает расхождение между типами и схемой. Для локальной разработки включён Apollo Sandbox через landing page plugin Apollo Server.

## Запуск через Docker

Требуются Docker Desktop и Docker Compose.

```bash
docker compose up --build
```

После запуска:

- Apollo Sandbox: <http://localhost:4000/graphql>

Остановить контейнеры:

```bash
docker compose down
```

Удалить также данные БД:

```bash
docker compose down -v
```

## Локальный запуск

Нужны Node.js 20 и выше, Docker с PostgreSQL.

1. Установите зависимости:

   ```bash
   npm install
   ```

2. Создайте `.env` на основе `.env.example`.

3. Запустите только PostgreSQL:

   ```bash
   docker compose up -d db
   ```

4. Сгенерируйте Prisma Client и примените миграции:

   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

5. Запустите NestJS:

   ```bash
   npm run start:dev
   ```

После запуска:

- Apollo Sandbox: <http://localhost:4000/graphql>
