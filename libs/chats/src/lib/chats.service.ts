import { Injectable } from '@nestjs/common'
import { PrismaClient, Chat } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class ChatsService {
  public getChats(): Promise<Chat[]> {
    return prisma.chat.findMany()
  }
}