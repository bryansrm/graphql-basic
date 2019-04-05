import { tasks } from './samples'

export const resolvers = {
    Query: {
        hello: () => {
            return 'Saludos con Graphql'
        },
        greet: (root, args) => {
            return `Saludos ${args.name}`
        },
        tasks(){
            return tasks;
        }
    }
};