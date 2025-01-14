const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

// const myServer = http.createServer((req, res) => {
//   if (req.url === '/favicon.ico') return res.end();
//   const log = `${Date.now()}: ${req.url} New Request Received\n `;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     // res.end("Hello From Server");
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("Homepage");
//         break;
//       case "/about":
//         const username = myUrl.query.myname
//         res.end( `Hii, ${username}`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are your results for "+search);
//       default:
//         res.end("404 Not Found");
//     }
//   });
// });

// myServer.listen(8000, () => console.log("Server Started!"));



//====================== Lecture 9 ==============================

// const myServer = http.createServer((req, res) => {
//   if (req.url === '/favicon.ico') return res.end();
//   const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n `;
//   const myUrl = url.parse(req.url, true);
  
//   fs.appendFile("log.txt", log, (err, data) => {
//     // res.end("Hello From Server");
//     switch (myUrl.pathname) {
//       case "/":
//         if (req.method === 'GET') res.end("Homepage");
//         break;
//       case "/about":
//         const username = myUrl.query.myname
//         res.end( `Hii, ${username}`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are your results for "+search);
//       case '/signup':
//         if(req.method === 'GET') res.end('This is a sign up form')
//         else if (req.method === 'POST'){
//           //DB Query
//           res.end("Success");
//         }
//       default:
//         res.end("404 Not Found");
//     }
//   });
// });

// myServer.listen(8000, () => console.log("Server Started!"));

//====================== Lecture 10 =============================


const app = express();

app.get('/', (req, res) => {
  return res.send('Hello From Home Page');
});

app.get('/about', (req, res) => {
  return res.send(`Hello From About Page ${req.query.name}`);
});

function myHandler(req, res){
  if (req.url === '/favicon.ico') return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n `;
  const myUrl = url.parse(req.url, true);
  
  fs.appendFile("log.txt", log, (err, data) => {
    // res.end("Hello From Server");
    switch (myUrl.pathname) {
      case "/":
        if (req.method === 'GET') res.end("Homepage");
        break;
      case "/about":
        const username = myUrl.query.myname
        res.end( `Hii, ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your results for "+search);
      case '/signup':
        if(req.method === 'GET') res.end('This is a sign up form')
        else if (req.method === 'POST'){
          //DB Query
          res.end("Success");
        }
      default:
        res.end("404 Not Found");
    }
  });
}

// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("Server Started!")); OR :
app.listen(8000, () => console.log("Server Started!"))
console.log("Pratik")

