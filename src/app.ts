import Fastify from 'fastify'
import { prisma } from './lib/prisma.js'

export const app = Fastify()

type User = {
  name: string
  email: string
}

app.get('/test', async (request, reply) => {
  const allUsers = await prisma.userAdmin.findMany()

  reply.status(200).send(allUsers)
})

app.post<{ Body: User }>('/test', async (request, reply) => {
  const { name, email } = request.body
  const userObject = { name, email }

  const newUser = await prisma.userAdmin.create({ data: userObject })

  reply.status(200).send({ newUser })
})
