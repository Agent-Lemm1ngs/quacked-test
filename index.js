const express = require("express");
const path = require("path");
const app = express();

const port = 8080;
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "src/index.html"));
});
app.listen(port, () => console.log(`Listening to port ${port}`)); // app.listen(port, "localhost", () => {
//console.log(`Listening on port ${port}`);
//});
