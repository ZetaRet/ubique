var assert = require('assert');
var ubique = require('../../index.js');

suite('quants',function () {
console.log('Testing quants/twr ...');
test('twr', function (done) {

var mv = [250000,255000,257000,288000,293000,285000], cf = [0,0,25000,0,-10000,0];

assert.deepEqual(ubique.twr(mv,cf),0.07564769566198049);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->