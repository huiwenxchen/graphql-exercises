// addPublisher(input: addPublisherInfo): Publisher!

const Publisher = require('../../models/Publisher')

const addPublisher = async (_obj, args, context) => {
  const publisherInput = await Publisher.query().insert({
    company: args.input.company,
    phoneNumber: args.input.phoneNumber,
    numBooksPublished: args.input.numBooksPublished,
    addressId: args.input.addressId,
  })
  return publisherInput
}

const resolver = {
  Mutation: {
    addPublisher,
  },
}

module.exports = resolver
