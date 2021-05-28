import fastify, { FastifyInstance } from 'fastify';
import fastifyCors from 'fastify-cors';
import healthHandler from './routes/health/routes';
import productsHandler from './routes/products/routes';
import rootHandler from './routes/root/routes';

function createServer(): FastifyInstance {
  const server = fastify();
  server.register(fastifyCors);

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  // Routes
  server.register(healthHandler, { prefix: '/health' });

  server.register(productsHandler, { prefix: '/product' });
  server.register(rootHandler, { prefix: '/' });

  return server;
}

export default createServer;
