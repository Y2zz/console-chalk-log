"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require("chalk");
var print = console.log;
var log = {
    info: function (msg) {
        print(chalk.bgBlue.black("INFO"), chalk.blue(msg));
    },
    warn: function (msg) {
        print(chalk.bgYellow.black("WARN"), chalk.yellow(msg));
    },
    error: function (msg) {
        print(chalk.bgRed.black("ERROR"), chalk.red(msg));
    },
    success: function (msg) {
        print(chalk.bgGreen.black("SUCCESS"), chalk.green(msg));
    },
};
exports.default = log;
