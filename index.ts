import * as express from 'express';
import {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Happy sealions'});
    console.log('GET executed');

});

app.get('/me', (req: Request, res: Response) => {
    res.json({name: 'Vasia'});

  (() => {
    const m = 'sdfasdf';
    console.log(3);
  })();

});

app.get('/horse', (req: Request, res: Response) => {
  res.json({horse: 'here is a horse'});
});

app.listen(8080);