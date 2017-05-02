// ===== Factorialise A Number ===== //

// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120



function factorialize(num) {
  //store a count variable for the for loop
  var count=num;
  //statement for unique '0' case scenario
  if(count===0){
    return 1;
  } else {
  //loop to factorialise starting at 1 and moving up
    for(var i=1; i<count; i++){
      num=num*i;
    }
  }
  return num;
}

factorialize(5);
// 120 //
factorialize(10);
// 3628800 //
factorialize(20);
// 2432902008176640000 //
factorialize(0);
// 1 //
