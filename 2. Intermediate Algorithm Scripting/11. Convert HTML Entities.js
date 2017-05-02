// ====== Convert HTML Entities ======= //

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


function convertHTML(str) {
  //split string into character array
  var placeHolder = str.split("");
  //itterate through character array
  for(var i=0; i<placeHolder.length; i++) {
   //check current value of character
    switch(placeHolder[i]) {
      //if case is met, replace with html entity
      case '&':
        placeHolder[i]='&amp;';
        break;
      case '<':
        placeHolder[i]='&lt;';
        break;
      case '>':
        placeHolder[i]='&gt;';
        break;
      case '"':
        placeHolder[i]='&quot;';
        break;
      case "'":
        placeHolder[i]='&apos;';
        break;
    }
  }
  //join character array back into string
  str = placeHolder.join("");
  return str;
}

convertHTML("Dolce & Gabbana");
// Dolce &​amp; Gabbana //
convertHTML("Hamburgers < Pizza < Tacos");
// Hamburgers &​lt; Pizza &​lt; Tacos //
convertHTML("Sixty > twelve");
// Sixty &​gt; twelve //
convertHTML('Stuff in "quotation marks"');
// Stuff in &​quot;quotation marks&​quot; //
convertHTML("Shindler's List");
// Shindler&​apos;s List //
convertHTML("<>");
// &​lt;&​gt; //
convertHTML("abc");
// abc //
