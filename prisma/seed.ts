import { PrismaClient } from '@prisma/client'

// import { users } from '../src/seed/user'

const prisma = new PrismaClient()

async function main() {
  // await prisma.users.createMany({
  //   data: users as never,
  // })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
