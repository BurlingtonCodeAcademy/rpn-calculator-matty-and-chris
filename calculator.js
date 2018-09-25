class Calculator {
  constructor() {
    this.stack = [0];
  }

  value() {
    let peek = this.stack.pop();
    this.stack.push(peek);
    return peek;
  }

  enter(value) {
    this.stack.push(value);
  }

  plus() {
    this.checkIfCalculatorIsEmpty()
    let first = this.stack.pop();
    let second = this.stack.pop();
    this.stack.push(first + second);
  }

  minus() {
    this.checkIfCalculatorIsEmpty()
    let first = this.stack.pop();
    let second = this.stack.pop();
    this.stack.push(second - first);
  }

  times() {
    this.checkIfCalculatorIsEmpty()
    let first = this.stack.pop();
    let second = this.stack.pop();
    this.stack.push(first * second);
  }

  divide() {
    this.checkIfCalculatorIsEmpty()
    let first = this.stack.pop();
    let second = this.stack.pop();
    this.stack.push(second / first);
  }

  checkIfCalculatorIsEmpty() {
    if (this.stack.length < 2) {
      throw "calculator is empty";
    }
  }
}

module.exports = Calculator;
