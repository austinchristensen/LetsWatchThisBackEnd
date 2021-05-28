import createServer from './server';
import { AppVersion } from './utils/version.util';

const PORT = process.env.PORT || '8080';
const server = createServer();

server.listen(+PORT, '0.0.0.0', (err, address) => {
  if (err) throw err;
  console.log(
    `server listening on: ${address} and version: ${AppVersion || ''}`
  );
});

module.exports = server;
