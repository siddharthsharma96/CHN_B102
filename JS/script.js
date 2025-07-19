// Selectors
// ID selector
// const heading = document.getElementById("title");
// console.log(heading);

// //1 single value
// // 2.Class selector
// let Values = document.getElementsByClassName("a");
// console.log(Values[1]);

// // Return HTMLCollection Array

// // 3. Tag Selector
// const headings = document.getElementsByTagName("h1");
// console.log(headings[0]);

// // Return HTMLCollection Array

// // 4. QuerySelector

// const byqury = document.querySelector("h1");
// console.log(byqury);

// // return a single value

// // 5.Quryselectorall

// const all = document.querySelectorAll(".a");
// console.log(all[0]);

// // Read and Write operation

// // read
// console.log(heading.textContent);

// // write
// heading.textContent = "Helloe learning DOM Manipulation";

// // style with js
// heading.style.color = "red";
// heading.style.backgroundColor = "green";

// // to add/remove/toggle a class
// heading.classList.add("sd");
// heading.classList.remove("sdf");
// heading.classList.toggle("sdf");

// const image = document.querySelector("img");
// image.src = "https://codehubnexus.com/assets/logov2.png";
// image.alt = "added by dom";

// image.remove();
// const inputval = document.querySelector("input");
// const message = document.querySelector(".a");
// const buttons = document.querySelector("button");

// buttons.addEventListener("click", () => {
//   message.textContent = inputval.value;
// });

// const newPara = document.createElement("p");
// newPara.textContent = "Added by dom";
// document.body.appendChild(newPara);

let n = 10;

if (n == 10) {
  console.log("It's  equal");
} else {
  console.log("now this will work");
}

// ternary Operator
// condition?ttrue:false
n == 12 ? console.log("equal") : console.log("not equal");

// else if
let scores = 69;
if (scores >= 90) {
  console.log("bike");
} else if (scores >= 80) {
  console.log("ps5");
} else if (scores >= 70) {
  console.log("party");
} else {
  console.log("pitayi");
}
