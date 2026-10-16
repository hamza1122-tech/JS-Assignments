// Assignment No 6

// let role = prompt("Enter Your role");
// switch (role) {
//   case "admin":
//     alert(" Full System Access");
//     break;
//   case "manager":
//     alert("Team management access");
//     break;
//   case "developer":
//     alert("Code access");
//   case "intern":
//     alert("Limited access");

//   default:
//     alert("Invalid role");
//     break;
// }

// let paymentMethod = prompt("Choose Payment method : Credit/ debit/upi/cod");
// switch (paymentMethod) {
//   case "credit":
//     alert("Your Payment method is Credit card");
//     break;
//   case "debit":
//     alert("Your Payment method is debit card");
//     break;
//   case "upi":
//     alert("Your Payment method is upi card");
//     break;
//   case "cod":
//     alert("Your Payment method is cod card");
//     break;
//   default:
//     alert("Invalid Credintial");
//     break;
// }

// let status = prompt("Enter Your Order Status");
// switch (status) {
//   case "placed":
//     alert("Your order is placed");
//     break;
//   case "packed":
//     alert("Your order is packed");
//     break;
//   case "shipped":
//     alert("Your order is shipped");
//     break;
//   case "delivered":
//     alert("Your order is delivered");
//     break;
//   case "cancelled":
//     alert("Your order is cancelled");
//     break;

//   default:
//     alert("invalid Credintial");
//     break;
// }

let officeDays = prompt("Enter Day to check working day");
switch (officeDays) {
  case "sunday":
    alert("Holyday");
    break;
  case "monday":
    alert("Working day");
    break;
  case "tuesday":
    alert("Working day");
    break;
  case "wednesday":
    alert("Working day");
    break;
  case "thursday":
    alert("Meeting day");
    break;
  case "friday":
    alert("Half day");
    break;
  case "saturday":
    alert("Holy day");
    break;

  default:
    alert("Invalid inputs");
    break;
}
