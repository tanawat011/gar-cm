import prisma from '@/libs/prisma'

export const resolvers = {
  Query: {
    links: () => {
      return prisma.users.findMany()
    },
  },
}
