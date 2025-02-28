/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let call = (number) => {
    let array = [];
    array.push(number);
    for (let i = 0; i <= array.length; i++) {
       array.push(i + 1);
       console.log(array);
    }
  };
  return function () {
    const result = call(n);
    return result;
  };
};
console.log(createCounter(10));
