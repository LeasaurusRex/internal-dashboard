import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  const departments = [
    { id: 1, name: 'Engineering', description: 'Software development and technical operations' },
    { id: 2, name: 'Design', description: 'User experience and visual design' },
    { id: 3, name: 'Marketing', description: 'Growth, content, and brand marketing' },
    { id: 4, name: 'Operations', description: 'Business operations and project management' },
    { id: 5, name: 'Communication', description: 'Internal and external communications' },
  ];

  for (const department of departments) {
    await prisma.department.upsert({
      where: { id: department.id },
      update: {},
      create: department,
    });
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());