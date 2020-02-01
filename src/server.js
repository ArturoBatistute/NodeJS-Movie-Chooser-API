const movies = require('./index')
const express = require('express')
const app = express()

/* Cant resolve function parameters import
let randomMovie = () => movies.randomMovie();
let directorRandomMovie = () => movies.directorRandomMovie();
*/

app.get('/v1/movie', async (req, res, next) => {

  res.send(movies.randomMovie());
})

app.get('/v1/movie/:director', async (req, res, next) => {
  const { director } = req.params;
  
  res.json(movies.directorRandomMovie(director));
})

const start = async (port = 8080) => {
  app.listen(port, function () {
    console.info('%s listening at port %s', app.name, port)
  })
}

const stop = () => {
  app.close(() => {
    console.info('App Stopped')
  })
}

module.exports = {
  app,
  start,
  stop
}
