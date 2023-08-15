/* 
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

function numberToString1(num) {
  return String(num);
}

function numberToString2(num) {
  return num + "";
}

function numberToString3(num) {
  return `${num}`;
}

function numberToString4(num) {
  return num.toString();
}

function numberToString5(num) {
  let arr = [];
  if (num < 0) {
    num *= -1;
    arr.push("-");
  }

  while (num != 0) {
    arr.push(num % 10);
    num /= 10;
    num = Math.trunc(num);
  }

  if (arr.at(0) === "-") {
    const strArr = arr.splice(1).reverse();
    strArr.unshift("-");
    return strArr.join("");
  } else return arr.reverse().join("");
}
console.log(typeof numberToString4(-67));
console.log(numberToString4(-67));
