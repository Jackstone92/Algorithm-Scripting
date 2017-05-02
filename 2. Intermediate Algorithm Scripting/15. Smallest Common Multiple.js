// ====== Smallest Common Multiple ======= //

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//
// The range will be an array of two numbers that will not necessarily be in numerical order.
//
// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);

  var temp = [];

  for(var i=min; i <= max; i++) {
    temp.push(i);
  }

  // use abs() for negative numbers //
  var a = Math.abs(temp[0]);

  for(var j=1; j<temp.length; j++) {
    var b = Math.abs(temp[j]);
    var c = a;

    //while a and b are both true (ie. not zero)//
    while(a && b) {
      if(a > b) {
        //get remainder of a//
        a = a % b;
      } else {
        b = b % a;
      }
    }

    a = Math.abs(c * temp[j] / (a + b));
  }
  return a;
}


smallestCommons([1, 5]);
// should return 60 //
smallestCommons([5, 1]);
// should return 60 //
smallestCommons([1, 13]);
// should return 360360 //
smallestCommons([23, 18]);
// should return 6056820 //
