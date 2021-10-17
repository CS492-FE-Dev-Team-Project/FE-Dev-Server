import { Server } from 'http';
import { Express } from 'express';
import express from './express';
import socket from './socket';

export default ({ server, app }: { server: Server; app: Express }): void => {
  express(app);
  socket(server);
};
