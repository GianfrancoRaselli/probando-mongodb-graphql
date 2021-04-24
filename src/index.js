const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');

//initializations
const app = express();
require('dotenv').config();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));

//routes
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

//connect to db
mongoose.connect('mongodb://' + process.env.HOST + '/' + process.env.DATABSE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err));

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ' + app.get('port'));
});