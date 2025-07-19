// console.log("Started Callstack");
// setTimeout(() => {
//   console.log("ready for drive nor");
// }, 0);
// console.log("Started2");

// console.log("Started3");

// setTimeout(function () {
//   console.log("ready  drive nor");
// }, 1000);

// // callback Hell
// setTimeout(() => {
//   console.log("step 1");
//   setTimeout(() => {
//     console.log("step 2");
//     setTimeout(() => {
//       console.log("step 3");
//       setTimeout(() => {
//         console.log("step 4");
//         setTimeout(() => {
//           console.log("step 5");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// Promises
// 1.pending
// 2.Fulfilled(resolved)
// 3.Rejected

let myNewPromise = new Promise((resolve, reject) => {
  let number = 78;
  if (number >= 70) {
    resolve("Now My father will give me party");
  } else {
    reject("💥Now no party and nothing");
  }
});
// 1. .then and.catch

// myNewPromise
//   .then(function (a) {
//     console.log("asds", a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // async and await
// const handlingPromise = async () => {
//   try {
//     let prize = await myNewPromise;
//     console.log(prize);
//   } catch (err) {
//     console.log(err);
//   }
// };

// handlingPromise();

// // how rto fetch an api

// const fetchData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(response);
//   const data = response.json();
//   console.log(data);
// };

// fetchData();

let counter = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
};

let i = counter();
i();
i();
