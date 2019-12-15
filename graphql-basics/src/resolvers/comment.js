const comment = {
  author(parent, args, {db}, info) {
    return db.users.find(user => user.id === parent.author)
  },
  post(parent, args, {db}) {
    console.log(parent)
    return db.posts.find(post => post.id === parent.postId)
  }
}

export { comment as default}
