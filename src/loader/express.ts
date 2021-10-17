import path from 'path';
import { Express } from 'express';

export default (app: Express) => {
  app.get('/', (req: any, res: any) => {
    res.sendFile(`${path.dirname(__dirname)}/index.html`);
  });
};
