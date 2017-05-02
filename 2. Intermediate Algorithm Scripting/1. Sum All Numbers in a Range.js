// ====== Sum All Numbers in a Range ====== //

// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
// The lowest number will not always come first.


function sumAll(arr) {

  //use math library to find max number in the array
  var maxNum = Math.max.apply(null, arr);
  //use math library to find min number in the array
  var minNum = Math.min.apply(null, arr);
  //used to get range for for loop
  var range = maxNum-minNum;
  //total numbers to be added
  var total = 0;

  for (var i = 1; i < range; i++) {
    total = total + minNum + i;
  }
  //add min and max to total, then returning total
  total = total + maxNum + minNum;

  return total;
}

sumAll([1, 4]);
// 10 //
sumAll([4, 1]);
// 10 //
sumAll([5, 10]);
// 45 //
sumAll([10, 5]);
// 45 //
