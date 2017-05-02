// ======= Caesars Cipher ======== //

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(encodedStr) {
  var codeArr = encodedStr.split("");
  var decodedArr = [];
  //create alphabet character array that goes past z by 13 letters, starting with A
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  //iterate through inputted string array
  for(var i=0; i<codeArr.length; i++) {
    //if current value isn't in alphabet...
    if(alphabet.indexOf(codeArr[i])===-1) {
      //...add that value to the decoded array
      decodedArr.push(codeArr[i]);
    } else {
      //iterate through alphabet
      for(var j=0; j<alphabet.length; j++) {
        //if current value in array is equal to alphabet...
        if(codeArr[i]===alphabet[j]) {
          //add the value to the decoded array, and +13 index shifts in alphabet
          decodedArr.push(alphabet[j+13]);
        }
      }
    }
  }
  //change the array back to a string
  return decodedArr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
// "FREE CODE CAMP" //
rot13("SERR CVMMN!");
// "FREE PIZZA!" //
rot13("SERR YBIR?");
// "FREE LOVE?" //
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
// "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX." //
