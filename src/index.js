import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';
import { connect } from './database';

const app = express();
connect();

app.get('/', (req, res) => {
    res.send("Ejemplo con Graphql");
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(3000, () => console.log('Server, on port 3000'));