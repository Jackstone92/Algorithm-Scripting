// ====== Spinal Tap Case ======= //

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regExp = /\s+|_+/g;
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Replace space and underscore with -
  return str.replace(regExp, '-').toLowerCase();
}

spinalCase("This Is Spinal Tap");
// "this-is-spinal-tap" //
spinalCase("thisIsSpinalTap");
// "this-is-spinal-tap" //
spinalCase("The_Andy_Griffith_Show");
// "the-andy-griffith-show" //
spinalCase("Teletubbies say Eh-oh");
// "teletubbies-say-eh-oh" //
spinalCase("AllThe-small Things");
// "all-the-small-things" //
