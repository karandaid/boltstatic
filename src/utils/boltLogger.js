const chalk = require('chalk');

const boltLogSuccess = (message) => {
  console.log(chalk.green(`✔ Bolt: ${message}`));
};

const boltLogError = (message, error) => {
  console.error(chalk.red(`✖ Bolt: ${message}`), error);
};

module.exports = {
  boltLogSuccess,
  boltLogError,
};
