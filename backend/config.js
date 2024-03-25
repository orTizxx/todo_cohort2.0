const dotenv = require("dotenv");
const path = require("path");

const envPath = path.resolve(__dirname, "../.env");

dotenv.config({ path: envPath });

const db = process.env.DB;

module.exports = {
  db,
};
