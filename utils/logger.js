const chalk = require('chalk')

function success(log){
    if(log) {
        console.log(chalk.green(log))
    }
}

function warn(log){
    if(log) {
        console.log(chalk.yellow(log))
    }
}

function error(log){
    if(log) {
        console.log(chalk.red(log))
    }
}

function notice(log){
    if(log) {
        console.log(chalk.blue(log))
    }
}

module.exports.success = success;
module.exports.warn = warn;
module.exports.error = error;
module.exports.notice = notice;