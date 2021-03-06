var assert = require('assert');
var ubique = require('../../index.js');

suite('stats',function () {
console.log('Testing stats/quantile ...');
test('quantile', function (done) {

var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

assert.deepEqual(ubique.quantile(x,0.25),0.002999999999999999);
assert.deepEqual(ubique.quantile(ubique.cat(0,x,y),0.33),[[0.011799999999999995],[-0.0242]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->