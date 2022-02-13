const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const cors = require('cors');
let schema = require('./schema');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: "GET,PUT,POST,DELETE,OPTIONS"
}));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('server start on 4000 port');
});
