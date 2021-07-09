"use strict";

const app = require("./app/app");

app.listen(app.get("port"), (error) => {
  if (error) {
    console.log(`there was a error: ${error}`);
  } else {
    console.log(`server running on port: ${app.get("port")}`);
  }
});
