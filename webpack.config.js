const path = require("path");

module.exports = {
  output: {
    fallback: { crypto: require.resolve("crypto-browserify") },
  },
};
