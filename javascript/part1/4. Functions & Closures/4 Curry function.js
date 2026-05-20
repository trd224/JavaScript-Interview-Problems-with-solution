function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

curryAdd(1)(2)(3); // 6

//////////////////


const greet = (greeting) => (name) => `${greeting} ${name}`;

const sayHello = greet("Hello");

sayHello("Rizwan"); // Hello Rizwan