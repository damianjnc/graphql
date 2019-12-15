const query = {
  users(parent, args, {db}) {
    if (!args.query) {
      return db.users
    } else {
      return db.users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))
    }
  },
  me() {
    return {
      id: '1284',
      name: 'Damian',
      email: 'damianjnc@gmail.com',
      age: 28
    }
  },
  posts(parent, args, {db}) {
    if (!args.query) {
      return db.posts
    }

    return db.posts.filter(post =>  post.title.toLowerCase().includes(args.query.toLowerCase()))
  },
  comments(parent, args, {db}) {
    return db.comments
  }
}

export { query as default }
