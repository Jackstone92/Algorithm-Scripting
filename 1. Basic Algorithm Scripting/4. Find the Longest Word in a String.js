// ===== Find the Longest Word in a String ====== //

// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.




function findLongestWord(str) {
  //create and array of strings, breaking up every space
  var arrayOfStrings = str.split(' ');
  //temporary placeholder for longest string
  var longestString = "";
  //iterate through the array and compare longest string with current string
  for(var i = 0; i < arrayOfStrings.length; i++) {
    if(longestString.length < arrayOfStrings[i].length) {
      longestString = arrayOfStrings[i];
    }
  }
  str = longestString;

  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
// 6 //
findLongestWord("May the force be with you");
// 5 //
findLongestWord("Google do a barrel roll");
// 6 //
findLongestWord("What is the average airspeed velocity of an unladen swallow");
// 8 //
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
// 19 //
