// ======== Steamroller =========== //

// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var placeHolder = [];
  // Create function that adds an element if it is not an array.
  var flatten = function(arg) {
    // If it is an array, then loops through it and uses recursion on that array.
    if (!Array.isArray(arg)) {
      placeHolder.push(arg);
    } else {
      for (var i in arg) {
        flatten(arg[i]);
      }
    }
  };
  // Call the function for each element in the array
  arr.forEach(flatten);
  return placeHolder;
}


steamrollArray([[["a"]], [["b"]]]);
// ["a", "b"] //
steamrollArray([1, [2], [3, [[4]]]]);
// [1, 2, 3, 4] //
steamrollArray([1, [], [3, [[4]]]]);
// [1, 3, 4] //
steamrollArray([1, {}, [3, [[4]]]]);
// [1, {}, 3, 4] //
