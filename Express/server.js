const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

app.listen(process.env.PORT_NO, () => {
  console.log("Server Started", process.env.PORT_NO);
});
