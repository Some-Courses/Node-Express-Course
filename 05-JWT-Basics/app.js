require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middlewares
app.use(express.static('./public'));
app.use(express.json());

app.use("/api/v1", mainRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

//6:03:27

/* //|JWT - Stateless
Jason Web Tokens are just a way to exchange data between two parties.
The most common examples for those parties are frontend and server.

When a request arrives to the server, we validate the token and if it passes the validation it means that the data and the token weren't tampered

*/