import uuidv4 from 'uuid/v4'

const mutation = {
  createUser(parent, args, {db}, info) {
    const emailTaken = db.users.some(user => user.email === args.input.email)
    console.log((args.input.email))
    if (emailTaken) {
      throw new Error('Email already in use')
    }

    const user = {
      id: uuidv4(),
      ...args
    }

    db.users.push(user)

    return user
  },
  deleteUser(parent, args, {db}) {
    const userIndex = db.users.findIndex((user) => {
      return user.id === args.id
    })

    if (userIndex === -1) {
      throw new Error('User not found')
    }

    const deletedUsers = db.users.splice(userIndex, 1)
    db.posts = db.posts.filter(post => {
      const match = post.author === deletedUsers[0].id
      if (match) {
        db.comments = db.comments.filter(comment => comment.postId !== post.id)
      }
      return !match
    })

    db.comments = db.comments.filter(comment => comment.author !== args.id)
    return deletedUsers[0]
  },
  updateUser(parent, args, {db}, info){
    const { id, input } = args
    const user = db.users.find( user => user.id === args.id)

    if(!user){
      throw new Error('User not found')
    }

    if( typeof input.email === 'string'){
      const emailTaken = db.users.some(user =>
        user.email === input.email)

      if(emailTaken){
        throw  new Error('Email is in use')
      }

    user.email = input.email
    }

    if(typeof input.name === 'string'){
      user.name = input.name
    }

    if(typeof input.age !== 'undefined' ){
      user.name = input.age
    }

    return user
  },
  updatePost(parent, {id, input}, {db}, info){
    console.log(db)
    const post = db.posts.find(post => post.id === id)
    if(!post){
      throw new Error('Post not found')
    }
    if(typeof input.title === 'string'){
      post.title = input.title
    }
    if(typeof input.body === 'string'){
      post.body = input.body
    }
    if(typeof input.published === 'boolean'){
      post.published = input.published
    }

    return post
  },
  createPost(parent, args, {db}, info) {
    const userExists = db.users.some(user => user.id === args.input.author)

    if (!userExists) {
      throw Error('user not found')
    }

    const post = {
      id: uuidv4(),
      ...args.input
    }

    db.posts.push(post)

    return post
  },
  deletePost(parent, args, {db}){
    const postIndex = db.posts.findIndex(post => post.id === args.id)

    if(postIndex === -1) throw Error('post not found')

    const deletedPost = db.posts.splice(postIndex, 1)

    db.comments = db.comments.filter( comment => comment.postId === args.id)

    return deletedPost[0]

    /*   const postToDelete = posts.find(post => post.id === args.id)

       if(!postToDelete) throw new Error('post not found')

       posts = posts.filter(post => {
         if(post.id === args.id){
           comments = comments.filter(comment => comment.postId !== post.id)
           return false
         }
         return true
       })
       return postToDelete

     */
  },
  createComment(parent, args, {db}, info) {
    const userExists = db.users.some(user => user.id === args.input.author)
    const postExists = db.posts.some(post => post.id === args.input.post && post.published)

    if (!postExists) {
      throw Error('post doesnt exists')
    }

    if (!userExists) {
      throw Error('user doesnt exists')
    }

    const comment = {
      id: uuidv4(),
      ...args.input
    }

    db.comments.push(comment)

    return comment
  },
  updateComment(parent, args, {db}, info){
    const comment = db.comments.find(
      comment => comment.id === args.id
    )

    if(!comment) throw new Error('Comment doesn\'t exists')

    comment.text = args.input.text

    return comment

  },
  deleteComment(parent, args, {db}){
    const commentIndex = db.comments.findIndex(comment => comment.id === args.id)

    if(commentIndex === -1){
      throw new Error('Comment doesn\'t exists')
    }

    const removedComment = db.comments[commentIndex]

    db.comments = db.comments.filter(comment => comment.id !== args.id)
    return removedComment
  }
}

export { mutation as default }
