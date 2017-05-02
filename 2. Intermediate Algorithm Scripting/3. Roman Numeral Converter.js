// ====== Roman Numeral Converter ======= //

// Convert the given number into a roman numeral.


function convertToRoman(num) {

 //create an empty string
 var roman = "";
 //create an array of possible roman numerals up to 1000
 var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 //create array of possible number values
 var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 //iterate for a length of our numbers array
 for (var i=0; i<numbers.length; i++) {
   //while original number is larger than inputted numbers array
   while(num >= numbers[i]) {
     //add its equivalent roman numeral to our original empty string
     roman = roman + romanNumeral[i];
     //subtract the value from original number to end the while loop
     num = num - numbers[i];
   }
 }
 return roman;
}

convertToRoman(2);
// "II" //
convertToRoman(3);
// "III" //
convertToRoman(4);
// "IV" //
convertToRoman(5);
// "V" //
convertToRoman(9);
// "IX" //
convertToRoman(12);
// "XII" //
convertToRoman(16);
// "XVI" //
convertToRoman(29);
// "XXIX" //
convertToRoman(44);
// "XLIV" //
convertToRoman(45);
// "XLV" //
convertToRoman(68);
// "LXVIII" //
convertToRoman(83);
// "LXXXIII" //
convertToRoman(97);
// "XCVII" //
convertToRoman(99);
// "XCIX" //
convertToRoman(500);
// "D" //
convertToRoman(501);
// "DI" //
convertToRoman(649);
// "DCXLIX" //
convertToRoman(798);
// "DCCXCVIII" //
convertToRoman(891);
// "DCCCXCI" //
convertToRoman(1000);
// "M" //
convertToRoman(1004);
// "MIV" //
convertToRoman(1006);
// "MVI" //
convertToRoman(1023);
// "MXXIII" //
convertToRoman(2014);
// "MMXIV" //
convertToRoman(3999);
// "MMMCMXCIX" //
