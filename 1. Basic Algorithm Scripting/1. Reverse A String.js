// ==== Reverse a String ==== //

// Reverse the provided string.
//
// You may need to turn the string into an array before you can reverse it.
//
// Your result must be a string.




function reverseString(str) {
  //Split the string into an array of characters for each space of ""
  //Use array's reverse function to reverse the values of index from first to last and vice versa
  //Reset to a string using array's join function and adding the separator ''
  return str.split("").reverse().join([separator='']);
}

reverseString("hello");
// "olleh" //
reverseString("Howdy");
// "ydwoH" //
reverseString("Greetings from Earth");
// "htraE morf sgniteerG" //
