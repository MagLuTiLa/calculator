var assert = require('assert');

var calculator = require('../calculations.js');


describe('Calculator unit tests', function() {
    
    it('Enter the first number', function(done) {
        assert.equal(calculator.addDigit('0', 5), 5);
        done();
    });

    it('Enter a number after the first', function(done) {
        assert.equal(calculator.addDigit('5', '3'), 53);
        done();
    });

    it('Calculate addition', function(done) {
        assert.equal(calculator.calculate('add', 5, 3), 5+3);
        done();
    });

    it('Calculate substraction', function(done) {
        assert.equal(calculator.calculate('subtract', 5, 3), 5-3);
        done();
    });

    it('Calculate multiplication', function(done) {
        assert.equal(calculator.calculate('multiply', 5, 3), 5*3);
        done();
    });

    it('Calculate division', function(done) {
        assert.equal(calculator.calculate('divide', 5, 3), 5/3);
        done();
    });

    it('Calculate without a valid operator should output the second number', function(done) {
        assert.equal(calculator.calculate('anythingelsereally', 5, 3), 3);
        done();
    });
});
