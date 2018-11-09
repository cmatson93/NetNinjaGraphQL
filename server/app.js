const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Allow cross-origin requests
app.use(cors())

//Connect to mlab database
mongoose.connect(
  "mongodb://christina:test123@ds115035.mlab.com:15035/gql-ninja"
);
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("Now listening for requests on port 4000");
})