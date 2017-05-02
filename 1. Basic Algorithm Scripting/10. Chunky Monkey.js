// ======= Chunky Monkey ========= //

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  //create empty array to add values to later
  var holderArray = [];
  //while loop counter and increment index
  var count = 0;
  //add to holderArray values between current index and size
  while (count < arr.length) {
    holderArray.push(arr.slice(count, count + size));
    //increase count
    count = count + size;
  }
  return holderArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// [["a", "b"], ["c", "d"]] //
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
// [[0, 1, 2], [3, 4, 5]] //
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
// [[0, 1], [2, 3], [4, 5]] //
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
// [[0, 1, 2, 3], [4, 5]] //
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
// [[0, 1, 2], [3, 4, 5], [6]] //
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// [[0, 1, 2, 3], [4, 5, 6, 7], [8]] //
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// [[0, 1], [2, 3], [4, 5], [6, 7], [8]] //
