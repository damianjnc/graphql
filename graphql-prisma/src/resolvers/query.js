const query = {
  users(parent, args, { db, prisma }, info) {
    return prisma.query.users(null, info)
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
  posts(parent, args, { db }) {
    if (!args.query) {
      return db.posts
    }

    return db.posts.filter(post =>
      post.title.toLowerCase().includes(args.query.toLowerCase())
    )
  },
  comments(parent, args, { db }) {
    return db.comments
  }
}

export { query as default }
