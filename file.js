const fs = require("fs");

// Sync... Blocking....
// fs.writeFileSync('./test.txt', 'hey there')

// Async... Non-Blocking....
// fs.writeFile("./test.txt", "Hello World Async", (err)=>{});

// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result)

//{Synchronous return the result in any variable just like result in the above example.}

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err){
//     console.log("Error", err)
//   } else{
//     console.log(result);
//   }
// })
//{In Asynchronous, it expects the callback function in which it can return}

fs.appendFileSync("./test.txt", "Hey there\n");

console.log(fs.statSync("./test.txt"));
