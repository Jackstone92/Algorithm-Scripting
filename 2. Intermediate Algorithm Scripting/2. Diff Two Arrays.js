// ======= Diff Two Arrays ====== //

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  var newArr = [];
  //iterate through array 1
  for(var i=0; i<arr1.length; i++) {
    //if array 2 does not contain items in array 1
    if(arr2.indexOf(arr1[i])===-1) {
      //add it to new array
      newArr.push(arr1[i]);
    }
  }
  //iterate through array 2
  for(var j=0; j<arr2.length;j++){
    //if array 1 does not contain items in array 2
    if(arr1.indexOf(arr2[j])===-1){
      //add it to new array
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// ["pink wool"] //
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// ["diorite", "pink wool"] //
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
// [] //
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// [4] //
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
// ["piglet", 4] //
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
// ["snuffleupagus", "cookie monster", "elmo"] //
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
// [1, "calf", 3, "piglet", 7, "filly"] //
