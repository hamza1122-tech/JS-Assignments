let a = 20;
let b = 12;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

let num = 34;
console.log((num += 50)); // behind the scene: num = num + 50
console.log((num -= 10)); // behind the scene: num = num - 10
console.log((num /= 10));
console.log((num *= 5));

let num1 = 10;
let num2 = "11";
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

let price = 400;
let quantity = 4;
let finalPrice = price * quantity;
console.log(finalPrice);

let mark1 = 70;
let mark2 = 43;
let mark3 = 59;
let finalScore = mark1 + mark2 + mark3;
console.log(finalScore);

let x = 5;
let y = "5";
// this assignment operator don't check the datatype
console.log(x == y);
// this assignment operator should check the datatype
console.log(x === y);
