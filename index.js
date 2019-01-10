const chalk = require("chalk");
const log = console.log;


var message = chalk.blue("Hello ") + chalk.yellow("World");
log(message);

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

const error = chalk.bold.red.dim;
const warning = chalk.keyword('orange');

log(error('Error!'));
log(warning('Warning!'));