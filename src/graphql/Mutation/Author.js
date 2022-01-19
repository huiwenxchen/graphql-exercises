// addAuthor(input: addAuthorInfo): Author!
// updateAuthor(id: ID!, input: editAuthorInput):Author!
const Author = require('../../models/Author')

const addAuthor = async (_obj, args, context) => {
  const author = await Author.query().insert({
    firstName: args.input.firstName,
    lastName: args.input.lastName,
    age: args.input.age,
    email: args.input.email,
    numBooksPublished: args.input.numBooksPublished,
    addressId: args.input.addressId,
  })
  return author
}

const updateAuthor = async (_obj, args, context) => {
  try {
    const getAuthorById = await Author.query().findOne('id', args.id)
    const changedAuthor = await getAuthorById.$query().patch({
      firstName: args.input.firstName,
      lastName: args.input.lastName,
      age: args.input.age,
      email: args.input.email,
      numBooksPublished: args.input.numBooksPublished,
      addressId: args.input.addressId,
    }).returning('*')
    return changedAuthor
  } catch (err) {
    // console.log(err)
    throw new Error('Failed to change author')
  }
}

const resolver = {
  Mutation: {
    addAuthor,
    updateAuthor,
  },
}

module.exports = resolver
