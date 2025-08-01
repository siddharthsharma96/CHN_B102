const fs = require("fs");
const http = require("http");
const url = require("url");

// Blocking Synchronous
// 1. path .encryption
const readData = fs.readFileSync("./txt/final.txt", "utf-8");

// console.log(readData);

// fs.writeFileSync(`./txt/${readData}.txt`, "Hello we are learning node");

// //Non Blocking code/  Asynchronous way
// // 1. path .encryption , Callabackfunction
// fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   if (err) return console.log("💥Error in this code");
//   console.log(data);
// });

// fs.writeFile("./txt/new.txt", "hi this is a nedw file data", "utf-8", (err) => {
//   if (err) return console.log("💥Error in this code");
//   console.log("data writeen successfully");
// });

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("💥Error in this code");
//   console.log(data);
//   fs.writeFile(
//     `./txt/${data}.txt`,
//     "Hello writen from a readfile data over here",
//     "utf-8",
//     (err) => {
//       if (err) return console.log("💥Error in this code");
//     }
//   );
// });

// Server

// 1XX :Providing Some info
// 2XX :Success
// 3XX :redirection
// 4XX :Client Error
// 5xx :Server Error

// STep 1 : Server Create

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  const { query, pathname } = url.parse(req.url, true);
  console.log(query, pathname);
  if (pathname === "/about") {
    res.end(readData);
  } else {
    res.end("My serevr Created heelo world ");
  }
});

// Step 2: Invoke the server or start the server
const PORT_NO = 9000;
server.listen(PORT_NO, "127.0.0.1", () => {
  console.log("server Started on ", PORT_NO);
});
