import * as assert from 'assert';
import { sum } from '../util/sum';

describe('#sum', () => {
    it('should return 5 for 2 + 3', () => {
        assert.equal(sum(2, 3), 5);
    });

    it('should return 6 for 3 + 3', () => {
        assert.equal(sum(3, 3), 6);
    })
});