var express = require("express");

var app = express();
var absolutePath = __dirname + "/views/index.html";

app.use("public", express.static(__dirname + "/public"));
// app.get("/", function firstPage(req, res) {
//   res.send("Hello Express");
// });

app.get("/", function serveFirstPage(req, res) {
  res.sendFile(absolutePath);
});

app.get("/", function serveFirstPage(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// app.get("/json", function serveJSON(req, res) {
//     res.json({ "message": "Hello json" });
// })
app.get("/json", function serveJSON(req, res) {
  var response;
  if (process.env.MESSAGE_STYLE == "uppercase") {
    response = "hello json".toUpperCase();
  } else {
    response = "Hello json";
  }
  res.json({ message: response });
});

app.listen(3000, function serveThisServer() {
  console.log("Server running on PORT 3000");
});

module.exports = app;

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function serveFirstPage(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
