const express = require('express');
const cors = require("cors");
const app = express();


const quizRouter = require("./router.js");
// middleware
app.use(express.json());
app.use(cors());
app.use("/api", quizRouter);

app.listen(3000, () => {
  console.log('server started');
});