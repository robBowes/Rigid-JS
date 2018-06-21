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
    it('returns false for value 0',() =>{
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
    it('returns undefined when givend false condition' , ()=>{
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


