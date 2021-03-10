var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var absolutePath = __dirname + "/views/index.html";
console.log("Hello World");

// app.get("/", function homePage(req, res) {
//   res.send("Hello Express");
// });

app.use(express.static(__dirname + "/public"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

app.get("/json", function (req, res) {
  res.json({
    message: "Hello json",
  });
});

// var absolutePath = __dirname + "/views/index.html";

// app.use("public", express.static(__dirname + "/public"));
// // app.get("/", function firstPage(req, res) {
// //   res.send("Hello Express");
// // });

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());
// function logger(req, res, next) {
//   res.send(`${res.method} ${req.path} - ${req.ip}`);
//   next();
// }

// app.get("/", function serveFirstPage(req, res) {
//   res.sendFile(absolutePath);
// });

// app.get("/", function serveFirstPage(req, res) {
//   res.sendFile(__dirname + "/views/index.html");
// });

// // app.get("/json", function serveJSON(req, res) {
// //     res.json({ "message": "Hello json" });
// // })
// app.get("/json", function serveJSON(req, res) {
//   var response;
//   if (process.env.MESSAGE_STYLE == "uppercase") {
//     response = "hello json".toUpperCase();
//   } else {
//     response = "Hello json";
//   }
//   res.json({ message: response });
// });

// app.listen(3000, function serveThisServer() {
//   console.log("Server running on PORT 3000");
// });

// module.exports = app;

// app.use("/public", express.static(__dirname + "/public"));

// app.get("/", function serveFirstPage(req, res) {
//   res.sendFile(__dirname + "/views/index.html");
// });

// // chain middleware

// app.get(
//   "/now",
//   function middleware(req, res, next) {
//     req.time = new Date().toString();
//     next();
//   },
//   function (req, res) {
//     res.json({ time: req.time });
//   }
// );

// app.get("/:word/echo", function repeatWord(req, res) {
//   var wordStr = req.params.word;
//   res.send(wordStr);
// });

// app.get("/name", function getName(req, res) {
//   var { first: firstName, last: lastName } = req.query;

//   res.json({ name: `${firstName} ${lastName}` });
// });

// app.post("/name", function sendUserInfo(req, res) {
//   var { first: firstName, last: lastName } = req.body;
//   res.json({ name: `${firstName} ${lastName}` });
// });

/***** continue  ****/

var express = require("express");
var app = express();

var absolutePath = __dirname + "/views/index.html";

// console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.use(function middleware(req, res, next) {
  if (req.protocol == "http") {
    return res.redirect(`https://${req.header.host}${req.url}`);
  }
  var str = `${req.method}${req.path} - ${req.ip}`;
  console.log(str);
  return next();
});

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "UPPERCASE") {
    res.json({
      message: "Hello json",
    });
  }
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      message: "Hello json",
    });
  }
});

module.exports = app;

/***** continue  ****/
