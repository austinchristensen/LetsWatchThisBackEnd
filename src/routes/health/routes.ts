import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getHealthSchema } from './schema';

export default function healthHandler(
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  server.get('/', { schema: getHealthSchema }, (req, res) => {
    res.send({ status: 'ok' });
  });

  done();
}
