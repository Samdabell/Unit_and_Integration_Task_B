var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add numbers', function(){
    calculator.previousTotal = 1
    calculator.add(2);
    assert.equal(3, calculator.runningTotal);
  })

  it('can subtract numbers', function(){
    calculator.previousTotal = 3
    calculator.subtract(2);
    assert.equal(1, calculator.runningTotal);
  })

  it('can multiply numbers', function(){
    calculator.previousTotal = 3
    calculator.multiply(2);
    assert.equal(6, calculator.runningTotal);
  })

  it('can divide numbers', function(){
    calculator.previousTotal = 8
    calculator.divide(2);
    assert.equal(4, calculator.runningTotal);
  })

  it('can have numbers inputed', function(){
    calculator.numberClick(5)
    assert.equal(5, calculator.runningTotal)
  })

  it('can have + inputed', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    assert.equal('+', calculator.previousOperator);
    calculator.numberClick(1)
    calculator.operatorClick('=')
    assert.equal(2, calculator.previousTotal);
  })

  it('can have - inputed', function(){
    calculator.numberClick(5)
    calculator.operatorClick('-')
    assert.equal('-', calculator.previousOperator);
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(2, calculator.previousTotal);
  })

  it('can have * inputed', function(){
    calculator.numberClick(4)
    calculator.operatorClick('*')
    assert.equal('*', calculator.previousOperator);
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(20, calculator.previousTotal);
  })

  it('can have / inputed', function(){
    calculator.numberClick(10)
    calculator.operatorClick('/')
    assert.equal('/', calculator.previousOperator);
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(2, calculator.previousTotal);
  })

  it('can have the total cleared', function(){
    calculator.numberClick(5)
    calculator.clearClick()
    assert.equal(0, calculator.previousTotal)
  })

});
