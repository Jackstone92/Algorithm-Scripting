// ======= DNA Pairing ======= //

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
// Return the provided character as the first element in each array.
//
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
  //changes string to uppercase for simple checking
  str = str.toUpperCase();
  //breaks string up into a character array
  str = str.split("");
  //empty array to be added to
  var placeHolder = [];
  //loop to iterate through character array
  for(var i=0; i<str.length;i++){
    //checks current character and if equal
    if(str[i]=="G"){
      //adds corresponding DNA pair to placeHolder
      placeHolder.push(["G", "C"]);
    } else if(str[i]=="C") {
      placeHolder.push(["C", "G"]);
    } else if(str[i]=="T"){
      placeHolder.push(["T", "A"]);
    } else if(str[i]=="A"){
      placeHolder.push(["A", "T"]);
    }
  }
  return placeHolder;
}

pairElement("ATCGA");
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]] //
pairElement("TTGAG");
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]] //
pairElement("CTCTA");
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]] //
