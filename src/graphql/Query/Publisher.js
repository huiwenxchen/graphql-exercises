const Publisher = require('../../models/Publisher')
const Book = require('../../models/Book')

// PublisherById(id:ID!): Publisher!
// booksByPublisher(id: ID!): [Book!]!

// query to get publisher by id
const publisherById = async (_obj, { id }, context) => {
  const p = await Publisher.query().findOne('id', id)
  return p
}

// query to get books by publisher
const booksByPublisher = async (_obj, { id }, context) => {
  const books = await Book.query().where('publisherId', id)
  return books
}

const resolver = {
  Query: {
    publisherById,
    booksByPublisher,
  },
}

module.exports = resolver
