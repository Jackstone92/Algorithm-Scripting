// ======== No Repeats Please ======== //

// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
//
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {
  var inputArr = str.split(''),
      permutations = [],
      tmp;
  // Heaps algorithm to generate all possible permutations
  function generate(num) {
    if (num === 0) {
      permutations.push(inputArr.join(''));
    } else {
      for (var i = 0; i < (num - 1); i++) {
        generate(num - 1);
        if (num % 2 === 0) {
          swap(i, num - 1);
        } else {
          swap(0, num - 1);
        }
      }
      generate(num - 1);
    }
  }

  // function to swap content
  function swap(pos1, pos2) {
    tmp = inputArr[pos1];
    inputArr[pos1] = inputArr[pos2];
    inputArr[pos2] = tmp;
  }

  // execute heap's algorithm
  generate(inputArr.length);

  // filter out repeated values using regex
  permutations = permutations.filter(function(val) {
    return !val.match(/(.)\1+/g);
  });

  // return the count
  return permutations.length;
}

permAlone("aab");
// should return a number //
permAlone("aab");
// should return 2 //
permAlone("aaa");
// should return 0 //
permAlone("aabb");
// should return 8 //
permAlone("abcdefa");
// should return 3600 //
permAlone("abfdefa");
// should return 2640 //
permAlone("zzzzzzzz");
// should return 0 //
permAlone("a");
// should return 1 //
permAlone("aaab");
// should return 0 //
permAlone("aaabb");
// should return 12 //
