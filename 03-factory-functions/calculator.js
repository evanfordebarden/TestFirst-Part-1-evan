/* eslint-disable no-unused-vars */

// create and return calculator object w/ factory function 'createCalculator'

function createCalculator() {
  let result = 0;

  return {
    value() {
      return result;
    },
    add(num) {
      result += num;
    },
    subtract(num) {
      result -= num;
    },
    clear() {
      result = 0;
    },
  };
}

// create 'updateExistingInstances'

function addSquareMethod(anArray) {
  for (let i = 0; i < anArray.length; i++) {
    anArray[i].square = () => {
      return Math.pow(anArray[i].value(), 2);
    };
  }

  return anArray;
}

// create and return calculator object w/ factory function 'createCalculator' - use Object.create()

const humanCalculatorPrototype = {
  start: -10,
  value() {
    return this.total;
  },
  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  clear() {
    this.total = this.start;
  },
};

function createHumanCalculator() {
  const humanCalculator = Object.create(humanCalculatorPrototype);
  humanCalculator.total = humanCalculator.start;

  return humanCalculator;
}
