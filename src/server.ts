import { createServer } from 'http';
import express from 'express';
import config from './config';
import loader from './loader';

class Server {
  public static async start(): Promise<void> {
    const app = express();
    const server = createServer(app);
    loader({ server, app });

    server.listen(config.HTTP_PORT, () => {
      console.log(`Server running on port ${config.HTTP_PORT}`);
    });
  }
}

export default Server;
