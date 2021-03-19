// only change code below this line
function mySplice(arr1, arr2, n) {
  var myArray = [...arr2];
  myArray.splice(n, 0, ...arr1);
  return myArray;
}
// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1)); // Change this line
module.exports = mySplice;
