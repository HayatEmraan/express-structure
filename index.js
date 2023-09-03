const express = require("express");
const app = express();
const router = require("./src/Routes/api");

const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
