const express = require("express");
const app = express();

const connectDB=require("./config/connectDB")

app.use(express.json())

app.use("/persons",require("./routes/person"))

connectDB();


const port = process.env.PORT || 5000;

app.listen(port, (err) => {
      err?console.log(err):console.log(`server running  at http://localhost:${port}`)
})