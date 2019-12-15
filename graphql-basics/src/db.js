let users = [
  {
    id: '1',
    name: 'Damian',
    email: 'damianjnc@gmail.com',
    age: 24
  },
  {
    id: '2',
    name: 'Damian2',
    email: 'damianjnc2@gmail.com'
  },
  {
    id: '3',
    name: 'Damian3',
    email: 'damianjnc3@gmail.com'
  }
]

let posts = [
  {
    id: '10',
    title: 'My title',
    body: 'it\'s the body of the post ',
    published: true,
    author: '1',
  },
  {
    id: '11',
    title: 'My title 2',
    body: 'it\'s the body of the post 2 ',
    published: true,
    author: '1',
  },
  {
    id: '12',
    title: 'My title 3',
    body: 'it\'s the body of the post 4',
    published: true,
    author: '2',
  }
]

let comments = [
  {
    id: '102',
    text: 'My comment 1',
    author: '3',
    postId: '10'
  },
  {
    id: '103',
    text: 'My comment 2',
    author: '1',
    postId: '10'
  },
  {
    id: '103',
    text: 'My comment 3',
    author: '2',
    postId: '11'
  },
  {
    id: '104',
    text: 'My comment 4',
    author: '1',
    postId: '11'
  }
]

const db = {
  users,
  comments,
  posts
}

export { db as default }
