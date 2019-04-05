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
    },
    Mutation: {
        createTask(_, { input }){
            input._id = tasks.length;
            tasks.push(input);
            console.log(tasks);
            return tasks;
        }
    }
};