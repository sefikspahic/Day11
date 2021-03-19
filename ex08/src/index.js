// Only change code below this line
function myMutation(arr) {
  var first = arr[0].toLowerCase().split("");
  var second = arr[1].toLowerCase().split("");
  return second.every(function (element) {
    return first.indexOf(element) > -1;
  });
}
// Only change code above this line

console.log(myMutation(["hello", "hey"])); // Change this line
console.log(myMutation(["hello", "Hello"])); // Change this line
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // Change this line
console.log(myMutation(["Mary", "Army"])); // Change this line
console.log(myMutation(["Mary", "Aarmy"])); // Change this line
console.log(myMutation(["Alien", "line"])); // Change this line
console.log(myMutation(["floor", "for"])); // Change this line
console.log(myMutation(["hello", "neo"])); // Change this line
console.log(myMutation(["voodoo", "no"])); // Change this line
console.log(myMutation(["ate", "date"])); // Change this line
console.log(myMutation(["Tiger", "Zebra"])); // Change this line
console.log(myMutation(["Noel", "Ole"])); // Change this line

module.exports = myMutation;
