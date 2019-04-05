import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `

    type Query {
        hello: String,
        name: String
    }

`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
})