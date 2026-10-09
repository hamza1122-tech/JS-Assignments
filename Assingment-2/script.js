let name = "Hamza";
let age = 21;
let isStudent = true;
let job = undefined;
let graduate = null;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof job);
console.log(typeof graduate);

console.log("Now conversion of element datatype");

// now conversion
name = Number(name);
console.log(name);
console.log(typeof name);

age = String(name);
console.log(age);
console.log(typeof age);

job = Boolean(job);
console.log(job);
console.log(typeof job);
