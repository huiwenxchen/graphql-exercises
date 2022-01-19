const Author = require('../../models/Author')
const Book = require('../../models/Book')

// query to display all Authors
const allAuthors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to get authors')
  }
}

// query to get a specific author
const author = async (_obj, { id }, context) => {
  const a = await Author.query().findOne('id', id)
  return a
}

// query to get all books
const books = async ({ id }, params, context) => {
  const b = await Book.query().where('authorId', id)
  return b
}

const resolver = {
  Query: {
    allAuthors,
    author,
  },
  Author: {
    books,
  },
}
module.exports = resolver
