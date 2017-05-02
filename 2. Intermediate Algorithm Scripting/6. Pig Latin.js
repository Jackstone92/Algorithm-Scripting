// ======= Pig Latin ======== //

// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str) {
  //break original string into an array of characters
  var letters = str.split("");
  //regex for strings that contain "aeiou"
  var vowelRegex = /[aeiou]/;

  //test first character of array
  if(vowelRegex.test(letters[0])){
    //upon matching, adds "way" to the end of the string
    return letters.join("") + "way";
  }
  //for cases not matching vowels
  while(true) {
    //if regex doesn't containe a vowel at first character
    if(!vowelRegex.test(letters[0])){
      //push it to the end and splice the first letter
      letters.push(letters.splice(0,1));
    } else {
      //breaks upon finding a vowel
      break;
    }
  }
  //adds "ay" to the end and joins string back together
  str = letters.join("") + "ay";

  return str;
}

translatePigLatin("california");
// "aliforniacay" //
translatePigLatin("paragraphs");
// "aragraphspay" //
translatePigLatin("glove");
// "oveglay" //
translatePigLatin("algorithm");
// "algorithmway" //
translatePigLatin("eight");
// "eightway" //
