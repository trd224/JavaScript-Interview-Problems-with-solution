const calculator = {
  value: 0,

  add(num) {
    this.value += num;
    return this;
  },

  multiply(num) {
    this.value *= num;
    return this;
  },

  subtract(num) {
    this.value -= num;
    return this;
  }
};

console.log(calculator.add(5).multiply(2).subtract(3).value); // 7