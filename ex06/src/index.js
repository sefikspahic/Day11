// Only change code below this line
function multiplyArrayFunction(arr) {
  var product = 1;
  var sum = 0;
  var myArray = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
      sum += arr[i][j];
    }
  }
  myArray.push(product, sum);
  return myArray;
}
// Only change code above this line

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]])); // Change this line
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]])); // Change this line
console.log(
  multiplyArrayFunction([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9],
  ])
); // Change this line
module.exports = multiplyArrayFunction;
