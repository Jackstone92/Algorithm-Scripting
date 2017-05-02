// ======= Mutations ======== //

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
  //lowercase both string inputs for comparison purposes
  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();
  /*
  length of 2nd word is important because we
  are iterating through its letters to see if they are in word1
  */
  for(var i=0;i<word2.length;i++) {
    //value holder for character
    var value = word1.indexOf(word2[i]);
    //a -1 result means that it is not contained in word1
    if(value === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
// false //
mutation(["hello", "Hello"]);
// true //
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
// true //
mutation(["Mary", "Army"]);
// true //
mutation(["Mary", "Aarmy"]);
// true //
mutation(["Alien", "line"]);
// true //
mutation(["floor", "for"]);
// true //
mutation(["hello", "neo"]);
// false //
mutation(["voodoo", "no"]);
// false //
