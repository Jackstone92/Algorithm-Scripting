// ======= Seek and Destroy ======= //

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
  //get full array values
  var args = Array.prototype.slice.call(arguments);
  //remove original array
  args.splice(0,1);

  var placeHolder = [];
  //compare array with values and delete any matches
  for(var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] == args[j]) {
      delete arr[i];
      }
    }
  }
  //filter out falsy values
  placeHolder = arr.filter(removeFalseVar);
  return placeHolder;
}

function removeFalseVar(value) {
  return Boolean(value);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// [1, 1] //
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
// [1, 5, 1] //
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
// [1] //
destroyer([2, 3, 2, 3], 2, 3);
// [] //
destroyer(["tree", "hamburger", 53], "tree", 53);
// ["hamburger"] //
