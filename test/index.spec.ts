import * as assert from 'assert';
import { square } from '../util/square';

describe('index', () => {
  describe('#square', () => {
    it('should return 4 for 2', () => {
      assert.equal(square(2), 4);
      assert.equal(square(3), 9);
    });

    it('should fail on missing arguments', () => {
      let error;
      try {
        square(undefined);
      } catch (err) {
        error = err;
      }

      assert.ok(error);
    });
  });
});
