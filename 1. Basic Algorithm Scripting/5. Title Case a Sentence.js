// ====== Title Case a Sentence ====== //

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".



function titleCase(str) {
  //split one string into an array of strings seperated by ' '
  var arrayOfStrings = str.split(" ");

  for (var i = 0; i < arrayOfStrings.length; i++) {
    //placeholder for original string
    var placeHolder = arrayOfStrings[i];
    //selects first letter and uppercases it
    var upperCase = placeHolder.charAt(0).toUpperCase();
    //selects second letter to end of the word and lowercases it
    placeHolder = placeHolder.slice(1, placeHolder.length).toLowerCase();
    //concatinates uppercase first letter and rest of lowercase word
    arrayOfStrings[i] = upperCase.concat(placeHolder);
  }
  //takes array and joins it into a single string
  str = arrayOfStrings.join(" ");

  return str;
}

titleCase("I'm a little tea pot");
// "I'm A Little Tea Pot" //
titleCase("sHoRt AnD sToUt");
// "Short And Stout" //
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
// "Here Is My Handle Here Is My Spout" //
