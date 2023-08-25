import express from "npm:express@^4.17";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(8080);
console.log("listening on http://localhost:8080/");

