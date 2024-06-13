// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const generateRoute = require("./routes/generateRoute");
const limiter = require("./config/rateLimiter");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);

app.use("/api", generateRoute);

app.listen(port, () => {
  console.log(`QR Code generator app listening at http://localhost:${port}`);
});
