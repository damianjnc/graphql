import { GraphQLServer, PubSub } from 'graphql-yoga'

import db from './db'
import Query from './resolvers/query'
import Mutation from './resolvers/mutation'
import Subscription from './resolvers/subscription'
import User from './resolvers/user'
import Post from './resolvers/post'
import Comment from './resolvers/comment'
import prisma from './prisma'

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Post,
    User,
    Comment
  },
  context: {
    db,
    pubsub,
    prisma
  }
})

server.start({ port: 4004 }, () => {
  console.log('This server is up')
})
