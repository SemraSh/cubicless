const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "_build")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "_build", "index.html"))
);

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
