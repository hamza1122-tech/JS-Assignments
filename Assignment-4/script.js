// Assignment No 4
// let age = Number(prompt("Enter Your age"));
// let feepaid = prompt("Have you paid fee");
// if (age >= 18 && feepaid == "yes") {
//   console.log("You can enter");
// } else {
//   console.log("You can't enter");
// }

// let email = prompt("Enter Your Email/Phone");

// // let phoneNumber = prompt("Enter Your Phone Number");
// if (email == "hamza@gmail.com" || email == "0319") {
//   console.log("Login Successful");
// } else {
//   console.log("Please enter correct datas");
// }

// let isBlocked = true;
// if (isBlocked != true) {
//   console.log("Access denied");
// } else {
//   console.log("Access Allowed");
// }

let isLoginedIn = true;
let isPremium = true;
let hasCoupoun = true;

if (isLoginedIn == true && (isPremium != false || hasCoupoun != true)) {
  console.log("You get special discount");
} else {
  console.log("You don't get special discount");
}
