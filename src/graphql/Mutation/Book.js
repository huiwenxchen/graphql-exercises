//  addBook(input: addBookInfo): Book!

const Book = require('../../models/Book')

const addBook = async (_obj, args, context) => {
  const bookInput = await Book.query().insert({
    title: args.input.title,
    language: args.input.language,
    numPages: args.input.numPages,
    datePublished: args.input.datePublished,
    bestseller: args.input.authorId,
    publisherId: args.input.publisherId,
  })
  return bookInput
}

const resolver = {
  Mutation: {
    addBook,
  },
}

module.exports = resolver
