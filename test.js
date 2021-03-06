const R = require('./index.js');
const assert = require('chai').assert;
/* global describe, it */

describe('existy', ()=>{
    it('returns true for input 0', ()=> {
        assert.isTrue(R.existy(0));
    });
    it('returns true for value false', ()=>{
        assert.isTrue(R.existy(false));
    });
    it('returns false for value null', ()=>{
        assert.isFalse(R.existy(null));
    });
});

describe('truthy', ()=>{
    it('returns false for value 0', () =>{
        assert.isFalse(R.truthy(0));
    });
    it('returns true for value 1', ()=>{
        assert.isTrue(R.truthy(1));
    });
});

describe('doWhen', ()=>{
    it('returns a value when given a truthy condition', ()=>{
        assert.equal(R.doWhen(true, ()=>1), 1);
    });
    it('returns undefined when givend false condition', ()=>{
        assert.isUndefined(R.doWhen(false, ()=>1));
    });
});

describe('executeIfHasField', ()=>{
    it('returns a value if has field', ()=>{
        const target = {test: ()=>'value'};

        const result = R.executeIfHasField(target, 'test');

        assert.equal(result, 'value');
    });
    it('returns undefined if there is no field', ()=>{
        const target = {test: ()=>'value'};

        const result = R.executeIfHasField(target, 'test2');

        assert.isUndefined(result);
    });
});

describe('complement', ()=>{
    it('returns false when given true predicate', ()=>{
        const stringIsValue = (str) => str ==='value';

        const value = 'value';

        assert.isFalse(R.complement(stringIsValue)(value));
    });
    it('returns true when given a false predicate', ()=>{
        const predicate = Number.isInteger;
        const value = 'value';

        const notInteger = R.complement(predicate);
        const result = notInteger(value);

        assert.isTrue(result);
    });
});

describe('concat', ()=>{
    it('makes an array', ()=>{
        const arg1 = [1];
        const arg2 = [2];

        const result = R.concat(arg1, arg2);

        assert.isArray(result);
    });
    it('puts the numbers in the correct order', ()=>{
        const arg1 = [1];
        const arg2 = [2];

        const result = R.concat(arg1, arg2);

        assert.isTrue(result[0]===arg1[0],
            'the head of the array is equal to the first ' +
            'element in the first argument array');
    });
    it('returns an empty array when given no arguments', ()=>{
        const result = R.concat();

        assert.isEmpty(result);
    });
});

describe('mapAndConcat', ()=>{
    it('returns an array', ()=>{
        const f = (el) => [''];
        const coll = [[1], [2], [3]];

        const result = R.concatAndMap(f, coll);

        assert.isArray(result);
    });
    it('returns a correct array', ()=>{
        const f = (el) => [''];
        const coll = [[1], [2], [3]];
        const expected = ['', '', ''];

        const result = R.concatAndMap(f, coll);

        assert.sameOrderedMembers(result, expected);
    });
});

describe('pluck', ()=>{
    it('returns an array', () =>{
        const coll = [{title: 'Chthon', author: 'Anthony'},
            {title: 'Grendel', author: 'Gardner'},
            {title: 'After Dark'}];
        const key = 'author';

        const result = R.pluck(coll, key);

        assert.isArray(result);
    });
    it('returns an array of authors', () =>{
        const coll = [{title: 'Chthon', author: 'Anthony'},
            {title: 'Grendel', author: 'Gardner'},
            {title: 'After Dark'}];
        const key = 'author';
        const expected = ['Anthony', 'Gardner', undefined];

        const result = R.pluck(coll, key);

        assert.sameOrderedMembers(result, expected);
    });
});
