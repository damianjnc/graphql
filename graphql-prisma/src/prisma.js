import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
})

export { prisma as default }
/*
prisma.exists
  .Comment({ id: 'ck4a0s2e701gq080280w4swoq' })
  .then(exists => console.log(exists))
*/

/*
const createPostForUser = async (authorId, data) => {
  const userExists = await prisma.exists.User({ id: authorId })

  if (!userExists) throw Error('User not found')

  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorId
          }
        }
      }
    },
    '{ author { id name email post { id title published } }'
  )

  return post
}

const updatePostForUser = async (id, data) => {
  const postExists = await prisma.exists.Post({ id })

  if (!postExists) throw Error("Post doesn't exist")

  const post = await prisma.mutation.updatePost(
    {
      data: {
        ...data
      },
      where: {
        id
      }
    },
    '{ author { id name email posts { id title published } } }'
  )

  return post
}

updatePostForUser('ck49xbjh2019g0802lmlpave0', {
  published: true
})
  .then(user => console.log(JSON.stringify(user, undefined, 2)))
  .catch(err => console.log(err.message))
*/
/*createPostForUser('ck49v4vrs012m0802n2recmc1', {
  title: 'Elixir',
  body: 'Elixir is the functional programming language',
  published: true
})
  .then(user => console.log(JSON.stringify(user, undefined, 2)))
  .catch(err => console.log(err.message))*/
/*
prisma.query
  .users(null, '{ id name posts { id title } }')
  .then(data => console.log(JSON.stringify(data, undefined, 2)))

prisma.query
  .posts(null, '{ id title body published}')
  .then(data => console.log(JSON.stringify(data, undefined, 2)))
*/
// prisma.query
//   .comments(null, '{ id text author { id name } }')
//   .then(data => console.log(JSON.stringify(data, null, 2)))

/*
prisma.mutation
  .createPost(
    {
      data: {
        title: 'Mutations with prisma bindings',
        body: 'This is my post about mutations with prisma bindings',
        published: true,
        author: {
          connect: {
            id: 'ck4a0gdrk01c50802pmtbyesl'
          }
        }
      }
    },
    '{id title body published}'
  )
  .then(data => {
    console.log(data)
    return prisma.query.users(null, '{ id name posts { id title }')
  })
  .then(data => console.log(JSON.stringify(data, undefined, 2)))
*/
/*

prisma.mutation
  .updatePost(
    {
      data: {
        body: 'These are my post changes',
        published: false
      },
      where: {
        id: 'ck4b5mut804d508024zct4sad'
      }
    },
    '{id title body published}'
  )
  .then(data => {
    console.log(data)
    return prisma.query.posts(null, '{id title body published}')
  })
  .then(data => console.log(data))
*/
