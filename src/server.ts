import fastify, { FastifyInstance } from 'fastify';
import fastifyCors from 'fastify-cors';
import fastifyPostgres from 'fastify-postgres';
import healthHandler from './routes/health/routes';
import productsHandler from './routes/products/routes';
import rootHandler from './routes/root/routes';
import moviesHandler from './routes/movies/routes';
import booksHandler from './routes/books/routes';
import showsHandler from './routes/shows/routes';
import usersHandler from './routes/users/routes';

function createServer(): FastifyInstance {
  const server = fastify();
  server.register(fastifyCors);
  server.register(fastifyPostgres, {
    connectionString: 'postgres://austin:password@localhost:5432/letswatchthis',
  });

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  // Routes
  server.register(healthHandler, { prefix: '/health' });

  server.register(productsHandler, { prefix: '/product' });
  server.register(rootHandler, { prefix: '/' });
  server.register(usersHandler, { prefix: '/users' });
  server.register(moviesHandler, { prefix: '/movies' });
  server.register(booksHandler, { prefix: '/books' });
  server.register(showsHandler, { prefix: '/shows' });

  return server;
}

export default createServer;
