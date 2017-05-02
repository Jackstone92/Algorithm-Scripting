// ======= Sorted Union ======== //

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//
// Check the assertion tests for examples.


function uniteUnique(arr) {
  //create duplicate array from original array
  var placeHolder = arr;
  //iterate through the length of arguments
  for(var i=0; i<arguments.length; i++) {
    //iterates through current index value of arguments
    for(var j=0; j<arguments[i].length; j++) {
      //check if array containes value of arguments
      //returns -1 if it doesn't
      if(placeHolder.indexOf(arguments[i][j])===-1) {
        //add it to end of placeHolder array
        placeHolder.push(arguments[i][j]);
      }
    }
  }
  //set original array equal to duplicate array
  arr = placeHolder;

  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// [1, 3, 2, 5, 4] //
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
// [1, 3, 2, [5], [4]] //
uniteUnique([1, 2, 3], [5, 2, 1]);
// [1, 2, 3, 5] //
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
// [1, 2, 3, 5, 4, 6, 7, 8] //
