const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const feedbackRouter = require("./routes/feedback-routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", feedbackRouter);

mongoose
  .connect(
    "mongodb+srv://admin:Kcm5sLQUCBVn5Ubw@cluster0.jgct5lu.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
