// ====== Repeat a String Repeat a String ======= //

// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.


function repeatStringNumTimes(str, num) {
  //create an empty placeholder array to store string the strings
  var holderArray = [];
  //add strings based on how many times requested
  for (var i = 0; i < num; i++) {
    holderArray.push(str);
  }
  //turn array of strings into a single string
  str = holderArray.join('');
  return str;
}

repeatStringNumTimes("*", 3);
// "***" //
repeatStringNumTimes("abc", 3);
// "abcabcabc" //
repeatStringNumTimes("abc", 4);
// "abcabcabcabc" //
repeatStringNumTimes("abc", 1);
// "abc" //
repeatStringNumTimes("*", 8);
// "********" //
repeatStringNumTimes("abc", -2);
// "" //
