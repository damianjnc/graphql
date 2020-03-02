import uuidv4 from 'uuid/v4'

const mutation = {
  async createUser(parent, args, { prisma }, info) {
    return prisma.mutation.createUser({ data: args.data }, info)

    // const emailTaken = db.users.some(user => user.email === args.input.email)
    // console.log(args.input.email)
    // if (emailTaken) {
    //   throw new Error('Email already in use')
    // }
    //
    // const user = {
    //   id: uuidv4(),
    //   ...args
    // }
    //
    // db.users.push(user)
    //
    // return user
  },
  async deleteUser(parent, args, { prisma }, info) {
    return prisma.mutation.deleteUser({ where: { id: args.id } }, info)
  },
  async updateUser(parent, args, { prisma }, info) {
    return prisma.mutation.updateUser(
      { where: { id: args.id }, data: args.data },
      info
    )
  },
  createPost(parent, args, { prisma }, info) {
    return prisma.mutation.createPost(
      {
        data: {
          ...args.data,
          author: { connect: { id: args.data.author } }
        }
      },
      info
    )
    // const userExists = db.users.some(user => user.id === args.input.author)
    //
    // if (!userExists) {
    //   throw Error('user not found')
    // }
    //
    // const post = {
    //   id: uuidv4(),
    //   ...args.input
    // }
    //
    // db.posts.push(post)
    // if (args.input.published) {
    //   pubsub.publish('post', {
    //     post: {
    //       mutation: 'CREATED',
    //       data: post
    //     }
    //   })
    // }
    // return post
  },
  deletePost(parent, args, { prisma }, info) {
    return prisma.mutation.deletePost({ where: { id: args.id } }, info)
    // const postIndex = db.posts.findIndex(post => post.id === args.id)
    //
    // if (postIndex === -1) throw Error('post not found')
    //
    // const [post] = db.posts.splice(postIndex, 1)
    //
    // db.comments = db.comments.filter(comment => comment.postId === args.id)
    //
    // if (post.published) {`
    //   pubsub.publish('post', {
    //     post: {
    //       mutation: 'DELETED',
    //       data: post
    //     }
    //   })
    // }
    // return post
    //
    // /*   const postToDelete = posts.find(post => post.id === args.id)
    //
    //    if(!postToDelete) throw new Error('post not found')
    //
    //    posts = posts.filter(post => {
    //      if(post.id === args.id){
    //        comments = comments.filter(comment => comment.postId !== post.id)
    //        return false
    //      }
    //      return true
    //    })
    //    return postToDelete
    //
    //  */
  },
  updatePost(parent, { id, data }, { prisma }, info) {
    return prisma.mutation.updatePost(
      {
        data: data,
        where: { id: id }
      },
      info
    )
    // const post = db.posts.find(post => post.id === id)
    // const originalPost = { ...post }
    // if (!post) {
    //   throw new Error('Post not found')
    // }
    // if (typeof input.title === 'string') {
    //   post.title = input.title
    // }
    // if (typeof input.body === 'string') {
    //   post.body = input.body
    // }
    // if (typeof input.published === 'boolean') {
    //   post.published = input.published
    //   if (originalPost.published && !post.published) {
    //     //deleted
    //     pubsub.publish('post', {
    //       mutation: 'DELETED',
    //       data: originalPost
    //     })
    //   } else if (post.published && !originalPost.published) {
    //     //created
    //     pubsub.publish('post', {
    //       mutation: 'CREATED',
    //       data: post
    //     })
    //   }
    // } else if (post.published) {
    //   //updated
    //   pubsub.publish('post', {
    //     post: {
    //       mutation: 'UPDATED',
    //       data: post
    //     }
    //   })
    // }
    // return post
  },
  createComment(parent, args, { prisma }, info) {
    return prisma.mutation.createComment(
      {
        data: {
          ...args.data,
          author: {
            connect: {
              id: args.data.author
            }
          },
          post: {
            connect: {
              id: args.data.post
            }
          }
        }
      },
      info
    )

    // const userExists = db.users.some(user => user.id === args.input.author)
    // const postExists = db.posts.some(
    //   post => post.id === args.input.post && post.published
    // )
    //
    // if (!postExists) {
    //   throw Error('post doesnt exists')
    // }
    //
    // if (!userExists) {
    //   throw Error('user doesnt exists')
    // }
    //
    // const comment = {
    //   id: uuidv4(),
    //   ...args.input
    // }
    //
    // db.comments.push(comment)
    // pubsub.publish(`comment ${args.input.post}`, {
    //   comment: {
    //     mutation: 'CREATED',
    //     data: comment
    //   }
    // })
    // return comment
  },
  updateComment(parent, args, { prisma }, info) {
    return prisma.mutation.updateComment(
      {
        data: args.data,
        where: { id: args.id }
      },
      info
    )
    // const comment = db.comments.find(comment => comment.id === args.id)
    //
    // if (!comment) throw new Error("Comment doesn't exists")
    //
    // comment.text = args.input.text
    //
    // pubsub.publish(`comment ${comment.post}`, {
    //   comment: {
    //     mutation: 'UPDATED',
    //     data: comment
    //   }
    // })
    // return comment
  },
  deleteComment(parent, args, { prisma }, info) {
    return prisma.mutation.deleteComment({ where: { id: args.id } }, info)

    // const commentIndex = db.comments.findIndex(
    //   comment => comment.id === args.id
    // )
    //
    // if (commentIndex === -1) {
    //   throw new Error("Comment doesn't exists")
    // }
    //
    // const removedComment = db.comments[commentIndex]
    // console.log('removed comment', removedComment.id)
    // db.comments = db.comments.filter(comment => comment.id !== args.id)
    //
    // pubsub.publish(`comment ${removedComment.post}`, {
    //   comment: {
    //     mutation: 'DELETED',
    //     data: removedComment
    //   }
    // })
    //
    // return removedComment
  }
}

export { mutation as default }
