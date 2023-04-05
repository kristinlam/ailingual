const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { cards } = require('./seedData');

async function main() {
  for (const card of cards) {
    await prisma.card.create({
      data: card,
    });
  }

  console.log(`Seeded ${cards.length} cards`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
