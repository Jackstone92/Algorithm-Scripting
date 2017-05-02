// ======= Missing Letters ======= //

// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  //create a string that stores the english alphabet
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  //split the alphabet into character array
  alphabet = alphabet.split("");
  //split input string into a character array
  str = str.split("");
  //if our 1st letter is not an 'a', return undefined
  if(str[0] != 'a'){
    return undefined;
  }

  for(var i=0; i<str.length; i++) {
    //if letters don't match for alphabet and string, return missing alphabet letter
    if(str[i] != alphabet[i]) {
      return alphabet[i];
    }
  }
  return str;
}

fearNotLetter("abce");
// "d" //
fearNotLetter("abcdefghjklmno");
// "i" //
fearNotLetter("bcd");
// undefined //
fearNotLetter("yz");
// undefined //
