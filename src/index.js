const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)

const app = express();
const route = require("./routes/route");

app.use(express.json())

mongoose
  .connect("mongodb+srv://prince9871:BZjeaWxY1uTLCefz@cluster0.pelsn1m.mongodb.net/miniLoginSite", { useNewUrlParser: true })
  .then(console.log("MongoDb is connected"))
  .catch((err) => {
    console.log("${err}");
  });

app.use("/", route);

app.listen(3000, () => { console.log("Express running on port 3000") })