const express = require("express");
const path = require("path");

const BUILD_PATH = path.join(__dirname, "..", "build");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(BUILD_PATH));

app.get("*", (request, response) => {
  response.sendFile(path.join(BUILD_PATH, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}...`);
});
