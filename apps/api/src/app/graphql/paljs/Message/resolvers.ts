import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    findUniqueMessage: (_parent, args, { prisma }) => {
      return prisma.message.findUnique(args);
    },
    findFirstMessage: (_parent, args, { prisma }) => {
      return prisma.message.findFirst(args);
    },
    findManyMessage: (_parent, args, { prisma }) => {
      return prisma.message.findMany(args);
    },
    findManyMessageCount: (_parent, args, { prisma }) => {
      return prisma.message.count(args);
    },
    aggregateMessage: (_parent, args, { prisma }) => {
      return prisma.message.aggregate(args);
    },
  },
  Mutation: {
    createOneMessage: (_parent, args, { prisma }) => {
      return prisma.message.create(args);
    },
    updateOneMessage: (_parent, args, { prisma }) => {
      return prisma.message.update(args);
    },
    deleteOneMessage: async (_parent, args, { prisma }) => {
      return prisma.message.delete(args);
    },
    upsertOneMessage: async (_parent, args, { prisma }) => {
      return prisma.message.upsert(args);
    },
    deleteManyMessage: async (_parent, args, { prisma }) => {
      return prisma.message.deleteMany(args);
    },
    updateManyMessage: (_parent, args, { prisma }) => {
      return prisma.message.updateMany(args);
    },
  },
};
export default resolvers;
