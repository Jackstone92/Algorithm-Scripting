// ====== Truncate a String ====== //

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//
// Note that inserting the three dots to the end will add to the string length.
//
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.


function truncateString(str, num) {

  if(num>3) {
    if (str.length>num) {
      //slice the string 3 short of number
      str = str.slice(0, num-3);
      //add ... to end of string
      str = str.concat("...");
    }
  } else {
    //slice string
    str = str.slice(0,num);
    //add ... to end of string
    str = str.concat("...");
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
// "A-tisket..." //
truncateString("Peter Piper picked a peck of pickled peppers", 14);
// "Peter Piper..." //
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// "A-tisket a-tasket A green and yellow basket" //
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
// "A-tisket a-tasket A green and yellow basket" //
truncateString("A-", 1);
// "A..." //
truncateString("Absolutely Longer", 2);
// "Ab..." //
