import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { AppVersion } from '../../utils/version.util';
import { schema } from './schema';

export default function rootHandler(
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  server.get('', { schema }, (req, res) => {
    res.send({ version: AppVersion });
  });

  done();
}
