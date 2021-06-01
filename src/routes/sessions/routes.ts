import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import {
  // createSession,
  deleteSession,
  getAllSessions,
  getOneSession,
  // updateSession,
} from '../../models/index';
import { deleteSessionSchema, listSessionsSchema } from './schema';

export default function sessionHandler(
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: (err?: Error) => void
) {
  server.get('/', { schema: listSessionsSchema }, async (req, res) => {
    req.log.info('list sessions from db');
    const sessions = await getAllSessions();
    res.send(sessions);
  });

  server.get<{ Params: { _id: string } }>('/:_id', async (req, res) => {
    req.log.info('get one sessions from db');
    const id = req.params._id;
    const sessions = await getOneSession(id);
    res.status(200).send(sessions);
  });

  server.post('/', async (req, res) => {
    req.log.info('Add sessions to db');
    const sessions = await createSession(req.body);
    res.status(201).send(sessions);
  });

  server.delete<{ Params: { _id: string } }>(
    '/:_id',
    { schema: deleteSessionSchema },
    async (req, res) => {
      req.log.info(`delete session ${req.params._id} from db`);
      const id = req.params._id;
      await deleteSession(id);
      res.code(200).send('OK');
    }
  );

  done();
}
