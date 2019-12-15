const post = {
  author(parent, args, {db}, info) {
    return db.users.find(user => user.id === parent.author)
  },
  comments(parent, args, {db}) {
    return db.comments.filter(comment => comment.postId === parent.id)
  }
}

export { post as default }
