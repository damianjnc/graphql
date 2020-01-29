const query = {
  users(parent, args, { prisma }, info) {
    const opArgs = {}

    if (args.query) {
      opArgs.where = {
        AND: [{ name_contains: args.query }, { email_contains: args.query }]
      }
    }

    return prisma.query.users(opArgs, info)
    /*
        if (!args.query) {
          return db.users
        } else {
          return db.users.filter(user =>
            user.name.toLowerCase().includes(args.query.toLowerCase())
          )
        }
     */
  },
  posts(parent, args, { prisma }, info) {
    const opArgs = {}

    if (args.query) {
      opArgs.where = {
        OR: [{ title_contains: args.query }, { body_contains: args.query }]
      }
    }
    return prisma.query.posts(opArgs, info)
    // if (!args.query) {
    //   return db.posts
    // }
    //
    // return db.posts.filter(post =>
    //   post.title.toLowerCase().includes(args.query.toLowerCase())
    // )
  },
  comments(parent, args, { prisma }, info) {
    return prisma.query.comments(null, info)
  }
}

export { query as default }
