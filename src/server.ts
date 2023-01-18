import Fastify from "fastify"
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors, {
  // origin: ['https://localhost:3000']
})

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})

const port = 3333;

app.listen({
  port: port,
}).then(() => {
  console.log(`HTTP Server running on PORT: ${port}`)
})