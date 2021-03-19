// Create a myPetsArray arry here
var myPetsArray = ["Dog", "Cat"];

// End of myPetsArray

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];

  // only change code below this line
  myNewPets.push("Bird", "Fish");
  var firstPet = myNewPets.shift();
  var lastPet = myNewPets.pop();
  myNewPets.unshift("Lion");

  return myNewPets;

  // Only change code above this line
}

console.log(myArrayFunction(myPetsArray)); // Change this line
module.exports = myArrayFunction;
