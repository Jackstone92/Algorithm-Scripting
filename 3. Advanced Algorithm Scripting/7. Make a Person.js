// ======== Make a Person ======== //

// Fill in the object constructor with the following methods below:
//
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
//
// The methods that take an argument must accept only one argument and it has to be a string.
//
// These methods must be the only available means of interacting with the object.


var Person = function(firstAndLast) {
  var array = firstAndLast.split(" ");

  this.getFirstName = function() {
    return array[0];
  };

  this.getLastName = function() {
    return array[1];
  };

  this.getFullName = function() {
    return array[0] + " " + array[1];
  };

  this.setFirstName = function(first) {
    array[0] = first;
  };

  this.setLastName = function(last) {
    array[1] = last;
  };

  this.setFullName = function(firstAndLast) {
    var temp = firstAndLast.split(" ");
    this.setFirstName(temp[0]);
    this.setLastName(temp[1]);
  };
};
var bob = new Person('Bob Ross');


Object.keys(bob).length;
// should return 6 //
bob instanceof Person;
// should return true //
bob.firstName;
// should return undefined //
bob.lastName;
// should return undefined //
bob.getFirstName();
// should return "Bob" //
bob.getLastName();
// should return "Ross" //
bob.getFullName();
// should return "Bob Ross" //
bob.getFullName();
// should return "Haskell Ross" after bob.setFirstName("Haskell") //
bob.getFullName();
// should return "Haskell Curry" after bob.setLastName("Curry") //
bob.getFullName();
// should return "Haskell Curry" after bob.setFullName("Haskell Curry") //
bob.getFirstName();
// should return "Haskell" after bob.setFullName("Haskell Curry") //
bob.getLastName();
// should return "Curry" after bob.setFullName("Haskell Curry") //
