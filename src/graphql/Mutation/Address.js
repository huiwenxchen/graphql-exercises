// addAddress(input: addAddressInfo): Address!
// editAddress(id: ID!, input: editAddressInfo): Address!

const Address = require('../../models/Address')

const addAddress = async (_obj, args, context) => {
  const newAddress = await Address.query().insert({
    street: args.input.street,
    city: args.input.city,
    state: args.input.state,
    zip: args.input.zip,
  })
  return newAddress
}

const editAddress = async (_obj, args, context) => {
  const getAddress = await Address.query().findOne('id', args.id)
  const updateAddress = await getAddress.$query().patch({
    street: args.input.street,
    city: args.input.city,
    state: args.input.state,
    zip: args.input.zip,
  })
  return updateAddress
}
const resolver = {
  Mutation: {
    addAddress,
    editAddress,
  },
}

module.exports = resolver
