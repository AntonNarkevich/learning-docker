import * as redis from 'redis';

describe('redis connection', () => {
  it('should return the same key', done => {
    const key = 'super-key';
    const value = 'super-value';

    const client = redis.createClient({host: 'redis'});
    client.set(key, value, (err) => {
      if (err) {
        done(err);
        return;
      }

      client.get(key, (err, data) => {
        if (err) {
          done(err);
          return;
        }

        if (value !== data) {
          done(new Error('Values should be equal'));
        }

        client.quit();

        done();
      });
    });
  });
});