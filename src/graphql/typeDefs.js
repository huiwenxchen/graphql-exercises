const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!

    allAuthors: [Author!]
    author(id: ID!): = Author!
    books(id: ID): [Book!]!

    bookById(id: ID!): Book!
    bestsellerBooks: [Book!]!

    publisherById(id:ID!): Publisher!
    booksByPublisher(id: ID!): [Book!]!

  }

  type Mutation{
    addAuthor(input: addAuthorInfo): Author!
    updateAuthor(id: ID!, input: editAuthorInput):Author!

    addBook(input: addBookInfo): Book!

    addPublisher(input: addPublisherInfo): Publisher!

    addAddress(input: addAddressInfo): Address!
    editAddress(id: ID!, input: editAddressInfo): Address!
  }

  type Author{
    id: ID! 
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    addressId: ID!
  }

  type addAuthorInfo{
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    addressId: ID
  }

  type editAuthorInput{
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    addressId: ID
  }

  type Books{
    id: ID!
    title: String!
    language: String! 
    numPages: Int!
    datePublished: Date 
    bestseller: Boolean
    authorId: ID!
    publisherId:ID!

  }

  type addBookInfo{
    title: String!
    language: String! 
    numPages: Int!
    datePublished: Date 
    bestseller: Boolean
    authorId: ID!
    publisherId:ID

  }

  type Publisher{
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    addressId: ID!
  }

  type addPublisherInfo{
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    addressId: ID
  }


  type Address{
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: Int!
  }

  type addAddressInfo{
    street: String!
    city: String!
    state: String!
    zip: Int!
  }

  type editAddressInfo{
    street: String
    city: String
    state: String
    zip: Int
  }
  
  scalar Date

`
