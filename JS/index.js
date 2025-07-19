// console.log(a);
// // Hoisting
// var a = 10;
// console.log(a);
// // console.log(b);
// // temporal Dead zone
let b = 20;
// let b = 40;
// console.log(b);

// const c = 120;
// c = 30;
// console.log(c);

// functions
// 1. Named function
// Syntax : function fnname(){}
// function declaration
function print() {
  let a = 30;
  console.log("Helo world");
  console.log(b + a);
}
// console.log(print);

// function invoke
print();

// 2 function Expression
let a = function () {
  console.log("Function Expression ");
  console.log(b + 30);
};

a();
// aa();
//3. arrow Function
const aa = () => {
  console.log("Arrow Function ");
  console.log(b + 30);
};
aa();

// 4.IIFE Immediatley Invoked Function Expression

(function () {
  console.log("immediately invoked function");
})();

function sum(parameter1, parameter2) {
  console.log(
    "value of paramet 1 is ",
    parameter1,
    "value of paramet 2 is ",
    parameter2,
    "result is",
    parameter1 + parameter2
  );
}

sum(2, 4);
sum(4, 9);

sum(20, 45);

sum(23, 56);
