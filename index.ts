import chalk from "chalk";

const print = console.log;

const log = {
  info: (msg: unknown) => {
    print(chalk.bgBlue.black("INFO"), chalk.blue(msg));
  },
  warn: (msg: unknown) => {
    print(chalk.bgYellow.black("WARN"), chalk.yellow(msg));
  },
  error: (msg: unknown) => {
    print(chalk.bgRed.black("ERROR"), chalk.red(msg));
  },
  success: (msg: unknown) => {
    print(chalk.bgGreen.black("SUCCESS"), chalk.green(msg));
  },
};

export default log;
