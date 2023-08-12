/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function reverseString1(str) {
  return str.split("").reverse().join("");
}

function reverseString2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverseString3(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString3(str.substring(1)) + str[0];
  }
}
