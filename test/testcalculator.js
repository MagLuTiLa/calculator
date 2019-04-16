var assert = require('assert');

var calculator = require('../calculations.js');


describe('Calculator unit tests', function() {

    it('Add digit', function(done) {
        assert.equal(calculator.addDigit('add', 5, 3), 8);
        done();
    });

    it('Addition', function(done) {
        assert.equal(calculator.calculate('add', 5, 3), 8);
        done();
    });
});