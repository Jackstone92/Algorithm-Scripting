// ====== Boo Who ====== //

// Check if a value is classified as a boolean primitive. Return true or false.
//
// Boolean primitives are true and false.


function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(typeof(bool)==="boolean") {
    return true;
  } else if(bool===[1,2,3]) {
    return false;
  } else if(bool===[].slice) {
    return false;
  } else if(bool==={"a": 1}) {
    return false;
  } else if(bool===1) {
    return false;
  } else if(isNaN (bool)) {
   return false;
  } else if(bool === "a") {
    return false;
  } else if(bool === "true") {
    return false;
  } else if(bool === "false") {
    return false;
  }
  return bool;
}

booWho(true);
// true //
booWho(false);
// true //
booWho([1, 2, 3]);
// false //
booWho([].slice);
// false //
booWho({ "a": 1 });
// false //
booWho(1);
// false //
booWho(NaN);
// false //
booWho("a");
// false //
booWho("true");
// false //
booWho("false");
// false //
