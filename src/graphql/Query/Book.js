const Book = require('../../models/Book')

// bookById(id: ID!): Book!
// bestsellerBooks: [Book!]!

// query to get bookById
const bookById = async (_obj, { id }, context) => {
  try {
    const b = await Book.query().findOne('id', id)
    return b
  } catch (err) {
    throw new Error('Failed to get by book id')
  }
}

// query to get all bestselling books
const bestsellerBooks = async () => {
  try {
    const bestsellers = await Book.query().where('bestseller', true)
    return bestsellers
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to get bestselling books')
  }
}

const resolver = {
  Query: {
    bookById,
    bestsellerBooks,
  },
}

module.exports = resolver
