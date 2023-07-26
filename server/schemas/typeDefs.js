const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks(input: BookSaveInput!): User
    removeBook(bookId: ID!): User
  }
  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me(username: String!): User
  }
  input BookSaveInput {
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookSaveInput): User
    removeBook(bookId: ID): User
  }
`;
module.exports = typeDefs;
