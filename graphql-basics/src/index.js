import { GraphQLServer } from 'graphql-yoga'

import db from './db'
import Query from './resolvers/query'
import Mutation from './resolvers/mutation'
import User from './resolvers/user'
import Post from './resolvers/post'
import Comment from './resolvers/comment'

const server = new GraphQLServer({
  typeDefs:'./src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Post,
    User,
    Comment
  },
  context: {
    db
  }
})

server.start(() => {
  console.log('This server is up')
})

