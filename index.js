//  1. Perform addition of various types (string + boolean, string + number, number + boolean)

// string + boolean
console.log("Hello " + false); // Hello false

// string  + number
console.log("27" + 3); // 273

// number + boolean
console.log(77 + true); // 78

//  2. Perform multiplication of various types (string * boolean, string * number, number * boolean)

// string * boolean
console.log("Say one word " * true); // NaN (not a number)

// string * number
console.log("34" * 9); // 306

// number * boolean
console.log(88 * false); // 0 (88 * 0 = 0)

// 3. Divide different types (string / boolean, string / number, number / Boolean)

// string / boolean
console.log("JS" / false); // NaN

// string / number
console.log("48" / 12); // 4
//BUT
console.log("Tennis" / 3); // NaN

// number / boolean
console.log(53 / false); // Infinity (mathematical rule of dividing by zero)

// 4. Perform explicit conversion (number, string, boolean)

console.log(Number("wow")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(String(7)); // "7"
console.log(String(true)); // "true"
console.log(String(false)); // "false"

console.log(Boolean(7)); // true
console.log(Boolean(-3)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hello!")); // true
console.log(Boolean("false")); // true
