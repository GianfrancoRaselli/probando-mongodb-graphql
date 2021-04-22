const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers')

const typeDefs = `
    type User {
        _id: ID,
        firstname: String!,
        lastname: String,
        age: Int
    }

    input UserInput {
        firstname: String!,
        lastname: String,
        age: Int
    }

    type Query {
        users: [User]
        user(_id: ID!): User
    }

    type Mutation {
        createUser(input: UserInput): User!
        updateUser(_id: ID!, input: UserInput): User!
        deleteUser(_id: ID!): User!
    }
`;

module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})