const R = require('./index.js');
const assert = require('chai').assert;
/* global describe, it */

describe('existy', ()=>{
    it('returns true for input 0', ()=> {
        assert.isTrue(R.existy(0));
    });
});


