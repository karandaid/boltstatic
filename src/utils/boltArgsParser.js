const boltParseArgs = (args) => {
    const parsedArgs = require('minimist')(args);
    return parsedArgs;
  };
  
  module.exports = {
    boltParseArgs,
  };
  