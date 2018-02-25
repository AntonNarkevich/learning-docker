import * as express from 'express';
import { Request, Response } from 'express';
import * as redis from 'redis';
import { Db, MongoClient } from 'mongodb';
import * as _ from 'lodash';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({message: 'Happy sealions'});
  console.log('GET executed');

});

app.get('/redis', (req: Request, res: Response) => {
  const key = 'super-key';

  const client = redis.createClient({host: 'redis'});
  client.set(key, 'super-value', (err) => {
    if (err) {
      res.sendStatus(400);
      return;
    }

    client.get(key, (err, data) => {
      if (err) {
        res.sendStatus(400);
        return;
      }

      res.json(data);
    });
  });
});

app.get('/get-redis', (req: Request, res: Response) => {
  const key = 'super-key';

  const client = redis.createClient({host: 'redis'});
  client.get(key, (err, data) => {
    if (err) {
      res.sendStatus(400);
      return;
    }

    res.json(data);
  });
});

let db: Db;

app.get('/get-mongo', (req: Request, res: Response) => {
  const users = db.collection('users');
  users.find({}).toArray((err, data) => {
    if (err) {
      res.sendStatus(400);
      return;
    }

    res.json(data);
  });
});

app.get('/mongo', (req: Request, res: Response) => {
  const users = db.collection('users');
  users.insertOne({name: `Vasia ${_.random(1, 1000)}`}, (err, data) => {
    if (err) {
      res.sendStatus(400);
      return;
    }

    res.sendStatus(200);
  });
});

const url = 'mongodb://mongo:27017';
const dbName = 'app';

MongoClient.connect(url, function(err, client) {
  app.listen(8080);
  console.log("MongoDB connected, server started");

  db = client.db(dbName);
});

