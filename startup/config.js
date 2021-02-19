const config = require("config");

module.exports = function () {
  console.log("+-+-+-+-+-+-+-+-+-+-+-+-+");
  console.log(process.env.NODE_ENV);
  console.log(process.env.PORT);
  console.log(config.get("jwtPrivateKey"));
  console.log("+-+-+-+-+-+-+-+-+-+-+-+-+");

  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
  }
};
