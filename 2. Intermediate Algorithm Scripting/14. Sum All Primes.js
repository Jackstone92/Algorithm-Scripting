// ====== Sum All Primes ====== //

// Sum all the prime numbers up to and including the provided number.
//
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
//
// The provided number may not be a prime.


function sumPrimes(num) {
  //create an array to reduce later and store prime numbers
  var placeHolder = [];
  //first loop to check if the number is prime
  for(var i=2; i<=num; i++) {
    //check inputted number against all numbers leading up to it
    for(var j=2; j<=i; j++) {
      //if they are equal, it is a prime number
      if(i===j) {
        placeHolder.push(i);
      }
      //if true, and isn't prime, break the loop
      if(i%j===0) {
        break;
      }
    }
  }
  //reduces the array by adding all of its inputs
  return placeHolder.reduce(function(x,y){
    return x+y;
  });
}

sumPrimes(10);
// 17 //
sumPrimes(977);
// 73156 //
